import {
    Text,
    Stack,
    Heading,
    Image,
    CardBody,
    Card,
    Flex,
    Center
  } from "@chakra-ui/react";
  
  import metal from "../../assets/imgs/metais.png";
  import './style.css'

  export function MetalCard() {
    return (
      <Card align='center' backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
  <CardBody >
    
    <Stack spacing='3' textAlign='center'>
      <Heading mt='6' fontSize='4rem'>METAL</Heading>
      </Stack>

      <Stack textAlign='center' mt='6' className="texto_metal">
      <Text fontSize='1rem' >
                #FERRAGENS 
                #FIOS DE COBRE
                #LATAS DE AEROSOL<br />
                #LATAS DE AZEITE
                #LATAS DE ÓLEO
                #LATAS DE CERVEJA<br />
                #LATAS DE REFRIGERANTE
                #LATAS DE SARDINHA
                #PANELAS SEM CABO
      </Text>
      </Stack>

      <Stack mt='6'>
      <Center>
      <Image
      className="img-metal"
      src={metal}
      alt='Green double couch with wooden legs'
      borderRadius='lg'/>
      </Center>
      
    </Stack>
  </CardBody>
</Card>      
    );
  }