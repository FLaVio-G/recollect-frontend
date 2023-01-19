import { Header } from "../components/Header/Header";
import logo from "../assets/imgs/morro-2.png";
import { Box } from "@chakra-ui/react";
import { ContatoCard } from "../components/Contato/ContatoCard";
import { DashboardCard } from "../components/Dashboard/DashboardCard";

function Dashboard() {
  return (
    <Box backgroundSize='cover' bgImage={logo} height="100vh">
      <Header />
      <DashboardCard />
    </Box>
  );
}
export default Dashboard;