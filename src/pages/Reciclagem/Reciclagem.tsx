import { Header } from "../../components/Header/Header";
import { Box } from "@chakra-ui/react";
import logo from "../../assets/imgs/morro-2.png";
import { ReciclagemCard } from "../../components/Reciclagem/ReciclagemCard";

function Reciclagem() {
  return (
    <>
      <Box backgroundSize='cover' bgImage={logo} height="100vh">
      <Header />
      <ReciclagemCard />
      </Box>
    </>
  );
}
export default Reciclagem;
