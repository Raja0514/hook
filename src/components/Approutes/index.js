import { Route, Routes } from "react-router-dom";
import Metsplods from "../../Pages/Metsplod";
import Prestarts from "../../Pages/Prestart";
import Loadinglocation from "../../Pages/Inventry";
import Development from "../../Pages/Oreders";
import Consumablebits from "../../Pages/Bits";
import Consumablesteels from "../../Pages/Steels";
import Consumablecouplings from "../../Pages/Couplings";
import Consumablereamers from "../../Pages/Reamers";
import Consumableshanks from "../../Pages/Shanks";
import Loads from "../../Pages/Loads";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/prestart" element={<Prestarts />}></Route>
      <Route path="/location" element={<Loadinglocation />}></Route>
      <Route path="/development" element={<Development />}></Route>
      <Route path="/metsplod" element={<Metsplods />}></Route>
      <Route path="/consumablebits" element={<Consumablebits />}></Route>
      <Route path="/consumablesteels" element={<Consumablesteels />}></Route>
      <Route path="/consumablecouplings" element={<Consumablecouplings />}></Route>
      <Route path="/consumablereamers" element={<Consumablereamers />}></Route>
      <Route path="/consumableshanks" element={<Consumableshanks />}></Route>
      <Route path="/loads" element={<Loads />}></Route>
    </Routes>
  );
}
export default AppRoutes;
