import { Header } from "../components/Header/Header";
import { Box } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";
import { ParceirosCard } from "../components/Parceiros/ParceirosCard";

function Parceiros() {
  return (
    <>
      <Box backgroundSize='cover' bgImage={logo} height="100%">
        <Header />
        <ParceirosCard />
      </Box>
    </>
  );
}
export default Parceiros;
