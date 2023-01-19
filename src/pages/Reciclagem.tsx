import { Header } from "../components/Header/Header";
import { Box } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";
import { ReciclagemCard } from "../components/Reciclagem/ReciclagemCard";
import { VidroCard } from "../components/Vidro/VidroCard";
import { MetalCard } from "../components/Metal/MetalCard";
import { PlasticoCard } from "../components/Plastico/PlasticoCard";
import { PapelCard } from "../components/Papel/PapelCard";
import { ResiduosComunsCard } from "../components/Residuos/ResiduosComunsCard";
import { ResiduosEspeciaisCard } from "../components/Residuos/ResíduosEspeciais";

function Reciclagem() {
  return (
    <>
      <Box backgroundSize='cover' backgroundAttachment={'fixed'} bgImage={logo} height="100%">
      <Header />
      <ReciclagemCard />
      </Box>
    </>
  );
}
export default Reciclagem;
