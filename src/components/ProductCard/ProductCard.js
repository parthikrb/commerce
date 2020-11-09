import React from "react";
import StarRatings from "react-star-ratings";
import "./ProductCard.css";

const ProductCard = React.forwardRef((props, ref) => {
  console.log(ref);
  const {
    productName,
    productImage,
    // productCategory,
    // productDescription,
    rating,
    originalPrice,
    offerPrice,
    onSale,
  } = props;
  return (
    <div className="product" ref={ref}>
      <img className="product__image" src={productImage} alt={productName} />
      {onSale && <div className="product__sale">Sale</div>}
      <div className="product__header">
        <h3 className="product__name">{productName}</h3>
        <StarRatings
          rating={rating}
          starRatedColor="gold"
          starDimension="12px"
          starSpacing="2px"
          numberOfStars={5}
          name="rating"
        />
      </div>
      <div className="product__secondary">
        <div className="product__prices">
          Price
          <p>
            <span className="product__offer-price">{offerPrice}</span>
            <span className="product__original-price">{originalPrice}</span>
          </p>
        </div>
        <div className="product__quantity">
          <div className="spacer"></div>
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            label="quantity"
            type="number"
            defaultValue={1}
          />
        </div>
      </div>
      <div className="product__actions">
        <button className="product__add-to-cart">Add to Cart</button>
        <button className="product__buy-now">Buy Now</button>
      </div>
    </div>
  );
});

export default ProductCard;
