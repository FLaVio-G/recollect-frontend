import { Header } from "../components/Header/Header"
import { Box } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";
import { PrincipalCard } from "../components/Principal/PrincipalCard";
import { VidroCard } from "../components/Vidro/VidroCard";
import { MetalCard } from "../components/Metal/MetalCard";
import { ResiduosEspeciaisCard } from "../components/Residuos/ResíduosEspeciais";


function QuemSomos() {
    return (
      <>
      <Box bgImage={logo} height="100vh">
      <Header />
      <VidroCard />
      </Box>
      </>
    )
  }
  export default QuemSomos
  