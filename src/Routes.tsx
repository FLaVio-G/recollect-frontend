import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import EsqueciMinhaSenha from "./pages/EsqueciMinhaSenha";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Parceiros from "./pages/Parceiros";
import QuemSomos from "./pages/QuemSomos/QuemSomos";
import QueroReciclar from "./pages/QueroReciclar";
import Reciclagem from "./pages/Reciclagem/Reciclagem";
import Recollect from "./pages/Recollect/Recollect";


export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/Recollect" element={<Recollect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Parceiros" element={<Parceiros />} />
        <Route path="/QuemSomos" element={<QuemSomos />} />
        <Route path="/QueroReciclar" element={<QueroReciclar />} />
        <Route path="/Reciclagem" element={<Reciclagem />} />
        <Route path="/EsqueciMinhaSenha" element={<EsqueciMinhaSenha />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}
