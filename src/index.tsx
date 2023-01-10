import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import Background from "./components/background"
import { Header } from "./components/Header"
import { PrincipalCard } from "./components/PrincipalCard"

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <Background>
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <Header/>
      <PrincipalCard/>
    <App />
    </ChakraProvider>
  </React.StrictMode>
  </Background>
)



