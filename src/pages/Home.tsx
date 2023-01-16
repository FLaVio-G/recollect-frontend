import { PrincipalCard } from "../components/Principal/PrincipalCard";
import { VidroCard } from "../components/Vidro/VidroCard";
import { MetalCard } from "../components/Metal/MetalCard";
import { PlasticoCard } from "../components/Plastico/PlasticoCard";
import { PapelCard } from "../components/Papel/PapelCard";
import { ResiduosComunsCard } from "../components/Residuos/ResiduosComunsCard";
import { ResiduosEspeciaisCard } from "../components/Residuos/ResíduosEspeciais";
import { ReciclagemCard } from "../components/Reciclagem/ReciclagemCard";
import { HomeCard } from "../components/Home/HomeCard";
import { LoginCard } from "../components/Login/LoginCard";
import { CadastroCard } from "../components/Cadastro/CadastroCard";
import { DashboardCard } from "../components/Dashboard/DashboardCard";
import { RecuperarSenhaCard } from "../components/RecuperarSenha/RecuperarSenhaCard";
import { ObrigadoCard } from "../components/ObrigadoPorCadastrar/ObrigadoCard";
import { Header } from "../components/Header/Header";
import { Box } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";

function Home() {
  return (
    <>
    <Box bgImage={logo} height="100vh">
      <Header />
      <HomeCard />
      
      {/*  <br />
     
      <br />
      <VidroCard /> <br />
      <MetalCard /> <br />
      <PlasticoCard /> <br />
      <PapelCard /> <br />
      <ResiduosComunsCard /> <br />
      <ResiduosEspeciaisCard />
      
      <LoginCard />
      <CadastroCard />
      <DashboardCard />
      <RecuperarSenhaCard />
      <ObrigadoCard />  */}
    </Box>
    </>
  );
}
export default Home;
