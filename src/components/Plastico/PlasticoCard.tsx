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
  
  import plastico from "../assets/imgs/plastico.png";
  
  export function PlasticoCard() {
    return (
      <Card>
        <CardBody backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px'>
          <Flex>
          <Stack maxW="960px" w='50%' >
            <CardBody>
              <Heading size="md" fontSize="4rem" color="white">
                Plástico
                <br /> <br />                
              </Heading>
  
              <Text py="2" fontSize="1rem" color='white'>
                # ACRÍLICOS <br />
                # CÁPSULAS DE CAFÉ<br />
                # COPOS DE PLÁSTICO<br />
                # EMBALAGENS DE FRUTAS E LEGUMES<br />
                # EMBALAGENS DE MARMITEX (ISOPOR) <br />
                # EMBALAGENS DE PRODUTOS DE HIGIENE<br />
                # EMBALAGENS DE PRODUTOS DE LIMPEZA<br />
                # EMBALAGENS DE REFRIGERANTES<br />
                # FRASCOS DE CONDIMENTOS<br />
                # FRASCOS DE MOLHOS<br />
                # GARRAFAS DE BEBIDAS ALCOÓLICAS E NÃO ALCOÓLICAS<br />
                # MESAS DE PLÁSTICO<br />
                # PARTE EXTERIOR DAS CANETAS<br />
                # POTES DE PLÁSTICO<br />
                # POTES DE PRODUTOS ALIMENTÍCIOS<br />
                # SACOS E SACOLAS<br />
                # TAMPAS PLÁSTICAS<br />
                # UTENSÍLIOS DE CONZINHA<br />
                
              </Text>
            </CardBody>
          </Stack>
  
          <Stack mt='15%' >
            <Center>
            <Image src={plastico}  />
            </Center>
            
            
          </Stack>
          </Flex>
        </CardBody>
      </Card>
    );
  }
  