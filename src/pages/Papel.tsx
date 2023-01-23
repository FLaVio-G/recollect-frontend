import { Header } from "../components/Header/Header";
import { Box } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";
import { PapelCard } from "../components/Papel/PapelCard";

function Papel() {
  return (
    <>
      <Box backgroundSize='cover' bgImage={logo} height={['100vh', '100%']}>
        <Header />
        <PapelCard />
      </Box>
    </>
  );
}
export default Papel;