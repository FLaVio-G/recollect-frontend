import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Contato from "./pages/Contato";
import Dashboard from "./pages/Dashboard";
import EsqueciMinhaSenha from "./pages/EsqueciMinhaSenha";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Metal from "./pages/Metal";
import ObrigadoPorCadastrar from "./pages/ObrigadoPorCadastrar";
import Papel from "./pages/Papel";
import Parceiros from "./pages/Parceiros";
import Plastico from "./pages/Plastico";
import QuemSomos from "./pages/QuemSomos";

import QueroReciclar from "./pages/QueroReciclar";
import Reciclagem from "./pages/Reciclagem";
import Recollect from "./pages/Recollect";
import RedefinirSenha from "./pages/RedefinirSenha";
import ResiduosComuns from "./pages/ResiduosComuns";
import ResiduosEspeciais from "./pages/ResiduosEspeciais";
import Vidro from "./pages/Vidro";




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
        <Route path="/Vidro" element={<Vidro />} />
        <Route path="/Metal" element={<Metal />} />
        <Route path="/Plastico" element={<Plastico />} />
        <Route path="/Papel" element={<Papel />} />
        <Route path="/ResiduosEspeciais" element={<ResiduosEspeciais />} />
        <Route path="/ResiduosComuns" element={<ResiduosComuns />} />
        <Route path="/RedefinirSenha" element={<RedefinirSenha />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        
      </WrapperRoutes>
    </BrowserRouter>
  );
}
