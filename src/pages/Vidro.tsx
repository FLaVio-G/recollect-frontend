import { Header } from "../components/Header/Header";
import { Box } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";
import { VidroCard } from "../components/Vidro/VidroCard";

function Vidro() {
  return (
    <>
      <Box backgroundSize='cover' bgImage={logo} height="100vh">
        <Header />
        <VidroCard />
      </Box>
    </>
  );
}
export default Vidro;
