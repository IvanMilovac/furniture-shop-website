import React from "react";

import Cart from "../../assets/cart-icon.png";

import "./ListItem.css";

const ListItem = ({ name, title, price, disprice }) => {
  return (
    <div className="furniture__products-list_item">
      <img src={Cart} className="furniture__products-list_item-cart" alt="" />
      <div className="furniture__products-list_item-title">{title}</div>
      <div className="furniture__products-list_item-price_container">
        <span>{price}</span>
        <span>{disprice}</span>
      </div>
      <div className="furniture__products-list_item-img">
        <img src={`./assets/${name}.png`} alt="" />
      </div>
    </div>
  );
};

export default ListItem;
