import { Header } from "../components/Header/Header"
import { Box } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";
import Map from "../components/googleMaps/Map";
import { useJsApiLoader } from "@react-google-maps/api";

import { mapOptions } from "../components/googleMaps/MapConfiguration";



function QueroReciclar() {
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });
    return (
      <Box backgroundSize='cover' bgImage={logo} height="100%">
      <Header />
      <Map isLoaded={isLoaded} />
    
      </Box>
    )
  }
  export default QueroReciclar
  