import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import Navbar from "./components/Navbar";
import ShopContextProvider from "./context/ShopContextProvider";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="shopping-site/" element={<Shop />} />
            <Route path="shopping-site/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
