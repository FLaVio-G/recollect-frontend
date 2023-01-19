import { Header } from "../components/Header/Header";
import logo from "../assets/imgs/morro-2.png";
import { Box } from "@chakra-ui/react";
import { ContatoCard } from "../components/Contato/ContatoCard";

function Cadastro() {
  return (
    <Box backgroundSize='cover' bgImage={logo} height="100%">
      <Header />
      <ContatoCard />
    </Box>
  );
}
export default Cadastro;