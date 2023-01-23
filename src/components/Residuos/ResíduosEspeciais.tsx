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

import residuos from '../../assets/imgs/residuos_especiais.png'
import './style.css'
import { Link as LinkRoute } from "react-router-dom";

export function ResiduosEspeciaisCard() {
  return (
    <Card className="residuos-especiais-card" align='center' backdropFilter='auto' backdropBlur='40px' backgroundColor='none' ml='2%' mr='2%' border='1px solid white' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
      <CardBody >

        <Stack spacing='3' textAlign='center'>
          <Heading fontSize={['3rem', '4rem']} color='white'>Resíduos Especiais</Heading>
        </Stack>

        <Stack textAlign='center' mt='6' className="texto_residuosespeciais">
          <Text fontSize='1rem' color='white'>
            #RESÍDUOS DE SAÚDE
            #ELETRÔNICOS
            #PILHAS E BATERIAS<br />
            #LÂMPADAS
            #ROUPAS E TECIDOS
            #ÓLEO DE COZINHA
            #REVISTAS
          </Text>
        </Stack>

        <Stack mt='6'>
          <Center>
            <Image
              align='center'
              src={residuos}
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