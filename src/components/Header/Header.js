import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Button } from "@material-ui/core";
import "./Header.css";

const Header = (props) => {
  const { brandName } = props;
  return (
    <div className="header">
      <div className="header__brand">{brandName}</div>
      <div className="header__search">
        <input
          type="text"
          className="header__search-input"
          placeholder="Search for products..."
        />
      </div>
      <div className="header__right-side">
        <Button className="header__right-side_cart">
          <ShoppingCartIcon />
          Cart
        </Button>
        <Button className="header__right-side_auth">
          <AccountCircleIcon />
          Login
        </Button>
      </div>
    </div>
  );
};

export default Header;
