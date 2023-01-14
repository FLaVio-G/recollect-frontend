import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Parceiros from "./pages/Parceiros";
import QuemSomos from "./pages/QuemSomos";
import QueroReciclar from "./pages/QueroReciclar";
import Reciclagem from "./pages/Reciclagem";


export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Parceiros" element={<Parceiros />} />
        <Route path="/QuemSomos" element={<QuemSomos />} />
        <Route path="/QueroReciclar" element={<QueroReciclar />} />
        <Route path="/Reciclagem" element={<Reciclagem />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}
