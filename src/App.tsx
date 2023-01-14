import { ChakraProvider, theme } from "@chakra-ui/react";
import Routes from "./Routes";


function App() {
  return (
    <ChakraProvider theme={theme}>
     
        <Routes />
    
    </ChakraProvider>
  );
}

export default App;
