import { Header } from "../components/Header/Header"
import logo from "../assets/imgs/morro-2.png";
import { Box } from "@chakra-ui/react";
import { RecuperarSenhaCard } from "../components/RecuperarSenha/RecuperarSenhaCard";
import { RedefinirSenhaCard } from "../components/RedefinirSenha/RedefinirSenhaCard";

function RedefinirSenha() {
  return (
  
     <Box backgroundSize='cover' bgImage={logo} height="100vh">
    <Header />
    <RedefinirSenhaCard />
    </Box>

  )
}
export default RedefinirSenha;
