import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Contato from "./pages/Contato";
import EsqueciMinhaSenha from "./pages/EsqueciMinhaSenha";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ObrigadoPorCadastrar from "./pages/ObrigadoPorCadastrar";

import Parceiros from "./pages/Parceiros";
import QuemSomos from "./pages/QuemSomos";

import QueroReciclar from "./pages/QueroReciclar";
import Reciclagem from "./pages/Reciclagem";
import Recollect from "./pages/Recollect";




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
        <Route path="/Home" element={<Home />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/ObrigadoPorCadastrar" element={<ObrigadoPorCadastrar />} />
        
      </WrapperRoutes>
    </BrowserRouter>
  );
}
