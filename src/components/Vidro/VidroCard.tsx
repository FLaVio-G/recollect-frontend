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


export function VidroCard() {
  return (
    <Card className="vidro-card" align='center' backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
      <CardBody >

        <Stack spacing='3' textAlign='center'>
          <Heading mt='6' fontSize='4rem'>VIDRO</Heading>
          <Text className="text_vidro" fontSize='1rem' >
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
              alt='Green double couch with wooden legs'
              borderRadius='lg' />
          </Center>

        </Stack>
      </CardBody>
    </Card>
  );
}

