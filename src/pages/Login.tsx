import { Header } from "../components/Header/Header"
import logo from "../assets/imgs/morro-2.png";
import { Box } from "@chakra-ui/react";
import { LoginCard } from "../components/Login/LoginCard";

function Login() {
  return (
  
     <Box backgroundSize='cover' bgImage={logo} height="100vh">
    <Header/>
    <LoginCard />
    
    </Box>

  )
}
export default Login
