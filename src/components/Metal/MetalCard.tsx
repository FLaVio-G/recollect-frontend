import {
  Text,
  Stack,
  Heading,
  Image,
  CardBody,
  Card,
  Flex,
  Center,
  Button
} from "@chakra-ui/react";

import metal from "../../assets/imgs/metais.png";
import './style.css'
import { Link as LinkRoute } from "react-router-dom";

export function MetalCard() {
  return (
    <Card mt='10' align='center' backdropFilter='auto' backdropBlur='40px' backgroundColor='none' ml='2%' mr='2%' border='1px solid white' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
      <CardBody >

        <Stack spacing='3' textAlign='center' color='white'>
          <Heading mt='6' fontSize={['3rem', '4rem']} color='white'>METAL</Heading>
        </Stack>

        <Stack textAlign='center' mt='6' className="texto_metal">
          <Text fontSize='1rem' color='white' >
            #FERRAGENS
            #FIOS DE COBRE.
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
              align='center'
              src={metal}
              alt='Green double couch with wooden legs'
              borderRadius='lg' />
          </Center>
          <Center>
            <Button mt='6' colorScheme="green" color='black' bg="white"><LinkRoute to="/Reciclagem">Voltar</LinkRoute></Button>
          </Center>
        </Stack>
      </CardBody>
    </Card>
  );
}