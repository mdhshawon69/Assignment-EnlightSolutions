/* eslint-disable eqeqeq */
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../App";
import products from "../../ProductData/productData";
import "./ProductPage.css";

const ProductPage = () => {
  const [cart, setCart] = useContext(CartContext);
  const { id } = useParams();
  const newProduct = products.find((product) => product.id == id);
  const { name, price, images, details, description } = newProduct;
  const [image, setImage] = useState(images.a);

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
    <div className="main-section">
      <div className="first-part">
        <div className="small-images">
          <img
            src={images.a}
            alt=""
            className="img-item"
            onClick={() => setImage(images.a)}
          />
          <img
            src={images.b}
            alt=""
            className="img-item"
            onClick={() => setImage(images.b)}
          />
          <img
            src={images.c}
            alt=""
            className="img-item"
            onClick={() => setImage(images.c)}
          />
        </div>
        <div className="big-image">
          <img src={image} alt="" className="main-image-item" />
        </div>
        <div className="details-section">
          <h5 className="title">{name}</h5>
          <h3 className="price">${price}</h3>
          <ul className="details-info">
            <span className="details">Details :</span>
            {details.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <div className="button-area">
            <button className="button" onClick={() => addToCart(id)}>
              Add to Cart
            </button>
            <button className="button">Buy Now</button>
          </div>
        </div>
        <div className="description-area">
          <h6 className="description-title">Product Description :</h6>
          <p className="description text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
