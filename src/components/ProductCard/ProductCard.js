import React from "react";
import StarRatings from "react-star-ratings";
import "./ProductCard.css";

const ProductCard = React.forwardRef((props, ref) => {
  const {
    productName,
    productImage,
    rating,
    ratingCount,
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
      </div>
      <div className="product__secondary">
        <div className="product__prices">
          <p className="product__offer-price">{offerPrice}</p>
          <p className="product__original-price">{originalPrice}</p>
        </div>
        <div className="product__rating">
          <StarRatings
            rating={rating}
            starRatedColor="gold"
            starDimension="12px"
            starSpacing="1px"
            numberOfStars={5}
            name="rating"
          />
          <p>({ratingCount})</p>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;
