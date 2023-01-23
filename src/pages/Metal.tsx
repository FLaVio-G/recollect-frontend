import { Header } from "../components/Header/Header";
import { Box } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";
import { MetalCard } from "../components/Metal/MetalCard";

function Metal() {
  return (
    <>
      <Box backgroundSize='cover' bgImage={logo} height={['100vh', '100%']}>
        <Header />
        <MetalCard />
      </Box>
    </>
  );
}
export default Metal;

