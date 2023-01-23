import { Header } from "../components/Header/Header";
import { Box } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";
import { PlasticoCard } from "../components/Plastico/PlasticoCard";

function Plastico() {
  return (
    <>
      <Box backgroundSize='cover' bgImage={logo} height={['100vh', '100%']}>
        <Header />
        <PlasticoCard />
      </Box>
    </>
  );
}
export default Plastico;