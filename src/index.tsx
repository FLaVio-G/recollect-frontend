
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import App from "./App"
import './styles/globals.css'
// import { ContatoCard } from "./components/Contato/ContatoCard";
// import Background from "./components/Background/background"
// import { Header } from "./components/Header/Header"
// import { PrincipalCard } from "./components/Principal/PrincipalCard"
// import { VidroCard } from "./components/Vidro/VidroCard"
// import { MetalCard } from "./components/Metal/MetalCard"
// import { PlasticoCard } from "./components/Plastico/PlasticoCard"
// import { PapelCard } from "./components/Papel/PapelCard"
// import { ResiduosComunsCard } from "./components/Residuos/ResiduosComunsCard"
// import { ResiduosEspeciaisCard } from "./components/Residuos/ResíduosEspeciais"
// import { ReciclagemCard } from "./components/Reciclagem/ReciclagemCard"
// import { HomeCard } from "./components/Home/HomeCard"
// import { LoginCard } from "./components/Login/LoginCard"
// import { CadastroCard } from "./components/Cadastro/CadastroCard"
// import { DashboardCard } from "./components/Dashboard/DashboardCard"
// import { RecuperarSenhaCard } from "./components/RecuperarSenha/RecuperarSenhaCard"
// import { ObrigadoCard } from "./components/ObrigadoPorCadastrar/ObrigadoCard"

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    
      {
      /* <Header/>
      <PrincipalCard/> <br />
      <ReciclagemCard/><br />\book\pt-br\v2\Começando-Configuração-Inicial-do-Git
      <VidroCard/> <br />
      <MetalCard/> <br />
      <PlasticoCard/> <br />
      <PapelCard /> <br />
      <ResiduosComunsCard/> <br />
      <ResiduosEspeciaisCard/>
      <HomeCard/>
      <LoginCard/>
      <CadastroCard/>
      <DashboardCard/>
      <RecuperarSenhaCard/>
      <ObrigadoCard/> */}
    <App />
   
  </React.StrictMode>
);
