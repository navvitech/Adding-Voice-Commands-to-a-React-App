import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Orders from "./Orders";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
};

export default CustomRoutes;