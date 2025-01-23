import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Products from "../src/pages/products";
import Dashboard from "./pages/dashboard";
import Home from "./pages/Home";
import Preplanting from "./pages/pre-panting";
import CropLocation from "./pages/crop-location";
// import Customers from "./pages/customers";
import Settings from "./pages/settings";
// import Login from "./pages/login";

const AppRoutes = () => (
  // <Router>
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/pre-planting" element={<Preplanting />} />
    <Route path="/crop-location" element={<CropLocation />} />
    {/* <Route path="/orders" element={<Orders />} /> */}
     {/*<Route path="/document-portal" element={<Categories />} />
    <Route path="/customers" element={<Customers />} />*/}
    <Route path="/settings" element={<Settings />} /> 
    <Route path="/" element={<Home />} />
  </Routes>
  // </Router>
);

export default AppRoutes;

// Add this line to make it a module
export {};
