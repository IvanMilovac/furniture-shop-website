import React, { useState } from "react";

import { ListItem } from "../../components/";

import ArrowRight from "../../assets/Arrow-right.png";

import "./Products.css";

const Products = () => {
  const [filterState, setFilterState] = useState("All");
  return (
    <div className="furniture__products">
      <div className="furniture__products-heading">
        <h1>Products</h1>
        <div className="furniture__products-heading_button">
          <p>See All</p>
          <div>
            <img src={ArrowRight} alt="" />
          </div>
        </div>
      </div>
      <div className="furniture__products-filter">
        <button
          onClick={() => setFilterState("All")}
          className={`${filterState === "All" ? "active" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => setFilterState("Bed")}
          className={`${filterState === "Bed" ? "active" : ""}`}
        >
          Bed
        </button>
        <button
          onClick={() => setFilterState("Sofa")}
          className={`${filterState === "Sofa" ? "active" : ""}`}
        >
          Sofa
        </button>
        <button
          onClick={() => setFilterState("Chair")}
          className={`${filterState === "Chair" ? "active" : ""}`}
        >
          Chair
        </button>
        <button
          onClick={() => setFilterState("Light")}
          className={`${filterState === "Light" ? "active" : ""}`}
        >
          Light
        </button>
      </div>
      <div className="furniture__products-list">
        {(filterState === "All" || filterState === "Light") && (
          <ListItem
            name="Light1"
            title="Hand Base Lamp"
            price="$35.00"
            disprice="$55.00"
          />
        )}
        {(filterState === "All" || filterState === "Chair") && (
          <ListItem
            name="Chair1"
            title="Vintage Chair"
            price="$65.00"
            disprice="$95.00"
          />
        )}
        {(filterState === "All" || filterState === "Light") && (
          <ListItem
            name="Light2"
            title="Lamp Tool"
            price="$35.00"
            disprice="$45.00"
          />
        )}
        {(filterState === "All" || filterState === "Chair") && (
          <ListItem
            name="Chair2"
            title="Stylish Chair"
            price="$45.00"
            disprice="$55.00"
          />
        )}
        {(filterState === "All" || filterState === "Chair") && (
          <ListItem
            name="Chair3"
            title="Vintage Chair"
            price="$65.00"
            disprice="$95.00"
          />
        )}
        {(filterState === "All" || filterState === "Chair") && (
          <ListItem
            name="Chair4"
            title="Stackable Chair"
            price="$87.00"
            disprice="$97.00"
          />
        )}
      </div>
    </div>
  );
};

export default Products;
