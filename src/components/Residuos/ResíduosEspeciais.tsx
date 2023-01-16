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
  
  import residuos from '../../assets/imgs/residuos_especiais.png'
  export function ResiduosEspeciaisCard() {
    return (
      <Card backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
        <CardBody >
          <Flex>
          <Stack maxW="960px" w='50%' >
            <CardBody>
              <Heading size="md" fontSize="4rem" color="white">
                RESÍDUOS ESPECIAIS
                <br /> <br />                
              </Heading>
  
              <Text py="2" fontSize="1rem" color='white'>
                # RESÍDUOS DE SAÚDE <br />
                # REMÉDIOS<br />
                # ELETRÔNICOS<br />
                # PILHAS E BATERIAS<br />
                # LÂMPADAS<br />
                # ROUPAS E TECIDOS<br />
                # ÓLEO DE COZINHA<br />
                
                
              </Text>
            </CardBody>
          </Stack>
          
          <Stack mt='10%'  w='50%'>
            
          <Center>
            <Image src={residuos}  />
            </Center>
            
          </Stack>
          </Flex>
        </CardBody>
      </Card>
    );
  }
  