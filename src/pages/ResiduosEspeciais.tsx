import { Header } from "../components/Header/Header";
import { Box } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";
import { VidroCard } from "../components/Vidro/VidroCard";
import { ResiduosEspeciaisCard } from "../components/Residuos/ResíduosEspeciais";

function ResiduosEspeciais() {
  return (
    <>
      <Box backgroundSize='cover' bgImage={logo} height={['100vh', '100%']}>
        <Header />
        <ResiduosEspeciaisCard />
      </Box>
    </>
  );
}
export default ResiduosEspeciais;
