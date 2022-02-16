import React, { useContext } from "react";
import { BsBagPlusFill } from "react-icons/bs";
import "./Product.css";
import { CartContext } from "../../App";
import products from "../../ProductData/productData";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const [cart, setCart] = useContext(CartContext);
  const { name, price, img, id } = product;

  const addToCart = (id) => {
    const addedProduct = products.find((pd) => pd.id === id);
    const isTrue = cart.find((pd) => pd.id === id);
    if (isTrue) {
      console.log("Product already exist");
    } else {
      setCart([...cart, addedProduct]);
    }
  };

  return (
    <Link to={`/details/${id}`}>
      <div className="product">
        <div className="cart-area">
          <button className="addToCart" onClick={() => addToCart(id)}>
            <BsBagPlusFill className="icon" />
          </button>
        </div>
        <div className="product-image">
          <img className="image" src={img} alt="" />
        </div>
        <div className="product-info">
          <h3 className="product-title">{name}</h3>
          <span className="product-price">${price}</span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
