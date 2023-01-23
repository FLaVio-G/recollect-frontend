import { Header } from "../components/Header/Header";
import { Box } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";
import { ResiduosComunsCard } from "../components/Residuos/ResiduosComunsCard";

function ResiduosComuns() {
  return (
    <>
      <Box backgroundSize='cover' bgImage={logo} height={['100vh', '100%']}>
        <Header />
        <ResiduosComunsCard />
      </Box>
    </>
  );
}
export default ResiduosComuns;
