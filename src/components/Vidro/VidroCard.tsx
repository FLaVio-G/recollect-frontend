import {
  Text,
  Stack,
  Heading,
  Image,
  CardBody,
  Card,
  Flex,
  Center,
  Divider,
  CardFooter,
  ButtonGroup,
  Button
} from "@chakra-ui/react";

import vidro from "../../assets/imgs/vidro.png";
import './style.css'
import { Link as LinkRoute } from "react-router-dom";

export function VidroCard() {
  return (
    <Card className="vidro-card" align='center' backdropFilter='auto' backdropBlur='40px' backgroundColor='none' ml='2%' mr='2%' border='1px solid white' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
      <CardBody >

        <Stack spacing='3' textAlign='center'>
          <Heading mt='6' color='white' fontSize={['3rem', '4rem']}>VIDRO</Heading>
          <Text className="text_vidro" fontSize='1rem' color='white'>
            #CACOS DE VIDRO
            #COPOS DE VIDRO
            #FRASCOS DE CONDIMENTOS<br />
            #FRASCOS DE MOLHO
            #FRASCOS DE PERFUME
            #GARRAFAS DE BEBIDAS<br />
            #LUMINÁRIAS
            #VIDROS DE AUTOMÓVEIS
            #VIDROS DE JANELAS
          </Text>
          <Center>
            <Image
              align='center'
              className="img-vidro"
              src={vidro}
              alt='garrafas de vidro'
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

