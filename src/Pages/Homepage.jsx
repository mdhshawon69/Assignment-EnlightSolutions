import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import "./Homepage.css";
import products from "../ProductData/productData";
import Product from "../Components/Product/Product";
import Alert from "../Components/Alert/Alert";

const Homepage = () => {
  return (
    <div className="bg container">
      <div className="sliderArea">
        <Carousel />
      </div>
      <div className="heading-area">
        <Alert />
        <h2>Best Shoes, For Best Style</h2>
      </div>
      <div className="productArea">
        <div className="product-container">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
