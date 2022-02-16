import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Homepage from "./Pages/Homepage";
import { createContext, useState } from "react";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from "./Components/ProductPage/ProductPage";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart]} className="App">
      <Navigation />
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/details/:id">
            <ProductPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
