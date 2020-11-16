import { useState, useEffect } from "react";
import axios from "axios";
import getProducts from "../Utils/data";

const useProductSearch = (query, pageNumber) => {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("")
      .then(() => {
        const product = getProducts();
        setLoading(false);
        // setProducts((prevProducts) => prevProducts.concat(...getProducts()));
        setProducts(product);
        setHasMore(product.length > 0);
      })
      .catch((e) => setError(e));
  }, [query, pageNumber]);
  return { loading, error, products, hasMore };
};

export default useProductSearch;
