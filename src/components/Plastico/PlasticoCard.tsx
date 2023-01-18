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
  
  import plastico from "../../assets/imgs/plastico.png";
  import './style.css'

  export function PlasticoCard() {
    return (
      <Card align='center' backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
  <CardBody >
    
    <Stack spacing='3' textAlign='center'>
      <Heading mt='6' fontSize='4rem'>PLÁSTICO</Heading>
      <Text mt='6' fontSize='1rem' >
                # ACRÍLICOS 
                # CÁPSULAS DE CAFÉ
                # COPOS DE PLÁSTICO 
                # EMBALAGENS DE FRUTAS E LEGUMES<br />
                # EMBALAGENS DE MARMITEX (ISOPOR) 
                # EMBALAGENS DE PRODUTOS DE HIGIENE
                # EMBALAGENS DE PRODUTOS DE LIMPEZA<br />
                # EMBALAGENS DE REFRIGERANTES
                # FRASCOS DE CONDIMENTOS
                # FRASCOS DE MOLHOS<br />
                # GARRAFAS DE BEBIDAS
                # MESAS DE PLÁSTICO
                # PARTE EXTERIOR DAS CANETAS
                # POTES DE PLÁSTICO<br />
                # POTES DE PRODUTOS ALIMENTÍCIOS
                # SACOS E SACOLAS
                # TAMPAS PLÁSTICAS
                # UTENSÍLIOS DE CONZINHA
      </Text>
      <Center>
      <Image 
      mt='6'
      align='center'
      src={plastico}
      alt='Green double couch with wooden legs'
      borderRadius='lg'/>
      </Center>
      
    </Stack>
  </CardBody>
</Card>      
    );
  }