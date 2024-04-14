import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import Products from "./component/Products";
import Cart from "./component/Cart";
import { Routes, Route } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Pay from "./component/Pay";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
      {/* <Home /> */}
      <Footer />
    </>
  );
}

export default App;
