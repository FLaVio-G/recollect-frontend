import { HomeCard } from "../components/Home/HomeCard";

import { Header } from "../components/Header/Header";
import { Box } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";

function Home() {
  return (
    <>
      <Box backgroundSize='cover' bgImage={logo} height={['100vh', '100%']}>
        <Header />
        <HomeCard />
      </Box>
    </>
  );
}
export default Home;
