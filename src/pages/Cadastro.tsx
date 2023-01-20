import { Header } from "../components/Header/Header";
import logo from "../assets/imgs/morro-2.png";
import { Box } from "@chakra-ui/react";
import { CadastroCard } from "../components/Cadastro/CadastroCard";
import api from "../services/api";

function Cadastro() {
  return (
    <Box backgroundSize='cover' bgImage={logo} height="100vh">
      <Header />
      <CadastroCard />
    </Box>
  );
}
export default Cadastro;
