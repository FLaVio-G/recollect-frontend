import { Header } from "../components/Header/Header"
import logo from "../assets/imgs/morro-2.png";
import { Box } from "@chakra-ui/react";
function Login() {
  return (
  
     <Box bgImage={logo} height="100vh">
    <Header />
    <Box bg='red'>teste2</Box>
    </Box>

  )
}
export default Login
