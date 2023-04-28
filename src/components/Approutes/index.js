import {  Route, Routes } from "react-router-dom";
import Customers from "../../Pages/Customers";
import Dashboard from "../../Pages/Dashboard";
import Inventory from "../../Pages/Inventry";
import Orders from "../../Pages/Oreders";


function AppRoutes() {
  return (
    <Routes>
      
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
    </Routes>
  );
}
export default AppRoutes;