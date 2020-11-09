import React, { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Menubar from "./components/MenuBar/Menubar";
import useProductSearch from "./hooks/useProductSearch";
import Home from "./views/Home/Home";

function App() {
  const [menu, setMenu] = useState({});
  const [query, setQuery] = useState("");
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
      console.log("Inside");
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
      <Header brandName="Nature's Deck" setQuery={setQuery} />
      <Menubar menuItems={menu} />
      <Home
        products={products}
        loading={loading}
        error={error}
        lastElementRef={lastProductElementRef}
        className="home"
      />
    </div>
  );
}

export default App;
