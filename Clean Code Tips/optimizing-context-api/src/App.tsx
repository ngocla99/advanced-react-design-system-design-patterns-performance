import Buttons from "./components/buttons";
import { CartProvider } from "./components/cart-context";
import Display from "./components/display";
import "./style.css";

function App() {
  return (
    <CartProvider>
      <Display />
      <Buttons />
    </CartProvider>
  );
}

export default App;
