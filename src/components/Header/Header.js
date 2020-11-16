import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import { Button } from "@material-ui/core";
import "./Header.css";

const Header = (props) => {
  const { brandName, setIsRetail } = props;
  const [retail, setRetail] = useState(true);
  let history = useHistory();

  const handleSellClick = () => {
    setRetail((prevState) => {
      setIsRetail(!prevState);
      return !prevState;
    });
    console.log(history);
    history.push(retail ? "/sell" : "/");
  };

  return (
    <div className="header">
      <div className="header__brand">{brandName}</div>
      <div className="header__search">
        {retail && (
          <input
            type="text"
            className="header__search-input"
            placeholder="Search for products..."
          />
        )}
      </div>
      <div className="header__right-side">
        <Button className="header__right-side_sell" onClick={handleSellClick}>
          <BusinessCenterIcon />
          {retail ? "Sell" : "Buy"}
        </Button>
        {retail && (
          <Button className="header__right-side_cart">
            <ShoppingCartIcon />
            Cart
          </Button>
        )}
        <Button className="header__right-side_auth">
          <AccountCircleIcon />
          Login
        </Button>
      </div>
    </div>
  );
};

export default Header;
