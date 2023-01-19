import { Header } from "../components/Header/Header";
import { Box } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";
import { PrincipalCard } from "../components/Principal/PrincipalCard";

function QuemSomos() {
  return (
    <>
      <Box backgroundSize='cover' bgImage={logo} height="100%">
        <Header />
        <PrincipalCard />
      </Box>
    </>
  );
}
export default QuemSomos;
