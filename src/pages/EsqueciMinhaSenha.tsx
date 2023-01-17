import { Header } from "../components/Header/Header"
import logo from "../assets/imgs/morro-2.png";
import { Box } from "@chakra-ui/react";
import { RecuperarSenhaCard } from "../components/RecuperarSenha/RecuperarSenhaCard";

function EsqueciMinhaSenha() {
  return (
  
     <Box backgroundSize='cover' bgImage={logo} height="100vh">
    <Header />
    <RecuperarSenhaCard />
    </Box>

  )
}
export default EsqueciMinhaSenha
