import { Header } from "../components/Header/Header"
import logo from "../assets/imgs/morro-2.png";
import { Box } from "@chakra-ui/react";
import { LoginCard } from "../components/Login/LoginCard";
import { CadastroCard } from "../components/Cadastro/CadastroCard";
import { RecuperarSenhaCard } from "../components/RecuperarSenha/RecuperarSenhaCard";
import { RedefinirSenhaCard } from "../components/Redefinir/RedefinirSenhaCard";
import { DashboardCard } from "../components/Dashboard/DashboardCard";
import { ContatoCard } from "../components/Contato/ContatoCard";
import { ObrigadoCard } from "../components/ObrigadoPorCadastrar/ObrigadoCard";
function Login() {
  return (
  
     <Box backgroundSize='cover' bgImage={logo} height="100vh">
    <Header />
    <RecuperarSenhaCard />
    
    </Box>

  )
}
export default Login
