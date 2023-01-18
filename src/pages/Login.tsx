import { Header } from "../components/Header/Header"
import logo from "../assets/imgs/morro-2.png";
import { Box } from "@chakra-ui/react";
import { LoginCard } from "../components/Login/LoginCard";
import { CadastroCard } from "../components/Cadastro/CadastroCard";
import { ContatoCard } from "../components/Contato/ContatoCard";
import { DashboardCard } from "../components/Dashboard/DashboardCard";
import { HomeCard } from "../components/Home/HomeCard";
import { MetalCard } from "../components/Metal/MetalCard";
import { ObrigadoCard } from "../components/ObrigadoPorCadastrar/ObrigadoCard";
import { PapelCard } from "../components/Papel/PapelCard";
import { ParceirosCard } from "../components/Parceiros/ParceirosCard";
import { PlasticoCard } from "../components/Plastico/PlasticoCard";
import { ReciclagemCard } from "../components/Reciclagem/ReciclagemCard";
import { RecuperarSenhaCard } from "../components/RecuperarSenha/RecuperarSenhaCard";
import { RedefinirSenhaCard } from "../components/Redefinir/RedefinirSenhaCard";
import { ResiduosComunsCard } from "../components/Residuos/ResiduosComunsCard";

function Login() {
  return (
  
     <Box backgroundSize='cover' bgImage={logo} height="100vh">
    <Header />
    <ResiduosComunsCard />
    
    </Box>

  )
}
export default Login
