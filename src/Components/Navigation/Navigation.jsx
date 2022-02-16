/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "./Navigation.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../../App";

const Navigation = () => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">
          Logo
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span className="cartIndicator">{cart.length}</span>
                <AiOutlineShoppingCart className="cart" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
