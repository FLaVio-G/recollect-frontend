import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import Background from "./components/background"
import { Header } from "./components/Header"
import { PrincipalCard } from "./components/PrincipalCard"
import { VidroCard } from "./components/VidroCard"
import { MetalCard } from "./components/MetalCard"
import { PlasticoCard } from "./components/PlasticoCard"
import { PapelCard } from "./components/PapelCard"
import { ResiduosComunsCard } from "./components/ResiduosComunsCard"
import { ResiduosEspeciaisCard } from "./components/ResíduosEspeciais"
import { ReciclagemCard } from "./components/ReciclagemCard"




const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <Background>
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <Header/>
      <PrincipalCard/> <br />
      <ReciclagemCard/><br />
      <VidroCard/> <br />
      <MetalCard/> <br />
      <PlasticoCard/> <br />
      <PapelCard /> <br />
      <ResiduosComunsCard/> <br />
      <ResiduosEspeciaisCard/>
    <App />
    </ChakraProvider>
  </React.StrictMode>
  </Background>
)



