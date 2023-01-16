import { Header } from "../components/Header/Header"
import { Box } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";
import { PrincipalCard } from "../components/Principal/PrincipalCard";
import { VidroCard } from "../components/Vidro/VidroCard";
import { MetalCard } from "../components/Metal/MetalCard";
import { ResiduosEspeciaisCard } from "../components/Residuos/ResíduosEspeciais";
import { PlasticoCard } from "../components/Plastico/PlasticoCard";
import { PapelCard } from "../components/Papel/PapelCard";

function QuemSomos() {
    return (
      <>
      <Box bgImage={logo} height="100vh">
      <Header />
      <PapelCard />
      </Box>
      </>
    )
  }
  export default QuemSomos
  