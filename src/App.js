import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import "./App.css";
import AllProducts from "./Components/AllProducts/AllProducts";
import Navigation from "./Components/Navigation/Navigation";

AOS.init();

function App() {
  const [cart, setCart] = useState(0);

  const handelAddToCart = () => {
    setCart(cart + 1);
  };
  return (
    <div>
      <Navigation cart={cart} />
      <AllProducts handelAddToCart={handelAddToCart} />
    </div>
  );
}

export default App;
