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
  
  import metal from "../assets/metais.png";
  
  export function MetalCard() {
    return (
      <Card>
        <CardBody backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px'>
          <Flex>
          <Stack maxW="960px" w='50%' >
            <CardBody>
              <Heading size="md" fontSize="4rem" color="white">
                Metais
                <br /> <br />                
              </Heading>
  
              <Text py="2" fontSize="1rem" color='white'>
                # FERRAGENS <br />
                # FIOS DE COBRE<br />
                # LATAS DE AEROSOL<br />
                # LATAS DE AZEITE<br />
                # LATAS DE ÓLEO<br />
                # LATAS DE CERVEJA<br />
                # LATAS DE REFRIGERANTE<br />
                # LATAS DE SARDINHA<br />
                # PANELAS SEM CABO<br />
                
              </Text>
            </CardBody>
          </Stack>
  
          <Stack mt='5%'  w='50%'>
            <Center>
            <Image src={metal}  w='50%' h='100%' />
            </Center>
            
            
          </Stack>
          </Flex>
        </CardBody>
      </Card>
    );
  }
  