import { Header } from "../components/Header/Header";
import { Box } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";
import { MapaParceiros } from "../components/googleMaps/MapaParceiros";

function Parceiros() {
  return (
    <>
      <Box bgImage={logo} height="100vh">
        <Header />
        <MapaParceiros />
      </Box>
    </>
  );
}
export default Parceiros;
