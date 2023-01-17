import { Header } from "../components/Header/Header";
import { Box } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";

function Parceiros() {
  return (
    <>
      <Box bgImage={logo} height="100vh">
        <Header />
      </Box>
    </>
  );
}
export default Parceiros;
