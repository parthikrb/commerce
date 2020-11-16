import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  Suspense,
} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Menubar from "./components/MenuBar/Menubar";
import useProductSearch from "./hooks/useProductSearch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const SellComponent = React.lazy(() => import("./views/Sell/Sell"));
const HomeComponent = React.lazy(() => import("./views/Home/Home"));

function App() {
  const [menu, setMenu] = useState({});
  const [query, setQuery] = useState("");
  const [isRetail, setIsRetail] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  const { products, hasMore, loading, error } = useProductSearch(
    query,
    pageNumber
  );

  useEffect(() => {
    const _menu = {
      Plants: ["Neem", "Money", "Tomato"],
      Accessories: ["Stool", "Stand", "Pot"],
    };
    setMenu(_menu);

    return () => {};
  }, []);

  const observer = useRef();
  const lastProductElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
          console.log("visible");
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="App">
      <Router>
        <Header
          brandName="Nature's Deck"
          setIsRetail={setIsRetail}
          setQuery={setQuery}
        />
        {isRetail && <Menubar menuItems={menu} />}
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <HomeComponent
                  products={products}
                  loading={loading}
                  error={error}
                  lastElementRef={lastProductElementRef}
                  className="home"
                />
              )}
            />
            <Route path="/sell" component={SellComponent} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
