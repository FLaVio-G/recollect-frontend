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

import papel from "../../assets/imgs/papel.png";
import './style.css'
import { Link as LinkRoute } from "react-router-dom";

export function PapelCard() {
  return (
    <Card mt='6' align='center' backdropFilter='auto' backdropBlur='40px' ml='2%' backgroundColor='none' mr='2%' border='1px solid white' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
      <CardBody >

        <Stack spacing='3' textAlign='center'>
          <Heading mt='6' fontSize={['3rem', '4rem']} color='white'>PAPEL</Heading>
          <Text className="text_papel" fontSize='1rem' color='white'>
            #EMBALAGEM DE OVO
            #EMBALAGENS DE PRODUTOS DE HIGIENE
            #EMBALAGENS DE PRODUTOS DE LIMPEZA <br />
            #JORNAIS
            #LISTA TELEFÔNICA
            #PAPÉIS DE DESENHOS
            #PAPÉIS DE ESCRITÓRIO<br />
            #PAPÉIS DE SEDA
            #PAPÉIS IMPRESSOS
            #PAPEL ALUMÍNIO
            #PAPEL FILTRANTE
            #PAPEL HELIOGRÁFICO<br />
            #PAPEL KRAFT
            #REVISTAS
          </Text>
          <Center>
            <Image
              mt='6'
              align='center'
              src={papel}
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
