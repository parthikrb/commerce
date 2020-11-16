import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css";
import Filters from "../../components/Filters/Filters";

const Home = (props) => {
  const { products, loading, error, lastElementRef } = props;

  const ProductTile = React.forwardRef((product, ref) => {
    return (
      <ProductCard
        ref={ref}
        productImage={product.product.product_image}
        productName={product.product.product_name}
        productCategory={product.product.product_category}
        productDescription={product.product.product_description}
        originalPrice={product.product.original_price}
        offerPrice={product.product.offer_price}
        onSale={product.product.onSale}
        rating={product.product.rating}
        ratingCount={product.product.ratingCount}
      />
    );
  });

  return (
    <div className="home">
      <div className="filter-container">
        <Filters />
      </div>
      <div className="products-container">
        <div className="products__tile">
          {products.map((product, index) => {
            if (products.length === index + 1) {
              return (
                <ProductTile
                  product={product}
                  key={product.id}
                  ref={lastElementRef}
                />
              );
            } else {
              return <ProductTile product={product} key={product.id} />;
            }
          })}
        </div>
        <div>{loading && "Loading..."}</div>
        <div>{error && "Error"}</div>
      </div>
    </div>
  );
};

export default Home;
