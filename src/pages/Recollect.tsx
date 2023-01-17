import { Box } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";
import { Header } from "../components/Header/Header";

import { HomeCard } from "../components/Home/HomeCard";

function Recollect() {
  return (
    <Box backgroundSize='cover' bgImage={logo} height="100vh">
      <Header/>
      <HomeCard />
    </Box>
  );
}
export default Recollect;
