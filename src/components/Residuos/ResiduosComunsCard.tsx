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
  
  
  export function ResiduosComunsCard() {
    return (
      <Card backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
        <CardBody >
          <Flex>
          <Stack maxW="960px" w='50%' >
            <CardBody>
              <Heading size="md" fontSize="4rem" color="white">
                RESÍDUOS COMUNS
                <br /> <br />                
              </Heading>
  
              <Text py="2" fontSize="1rem" color='white'>
                # BITUCAS DE CIGARRO <br />
                # CALÇADOS INUTILIZÁVEIS<br />
                # CRISTAIS<br />
                # EMBALAGENS PLÁST. METALIZADAS<br />
                # ESPONJAS DE AÇO<br />
                # ESPONJAS DE LIMPEZA<br />
                # ETIQUETAS ADESIVAS<br />
                # FIO DENTAL<br />
                # FOTOGRAFIAS<br />
                # FRALDAS<br />
                # GALHOS<br />
                # NEGATIVOS DE FILMES<br />
                # PANOS<br />
                # PAPEL ADESIVO<br />
                # PAPEL CARBONO<br />
                
              </Text>
            </CardBody>
          </Stack>
          
          <Stack mt='12%'  w='50%'>
            
          <Text py="2" fontSize="1rem" color='white'>
                # PAPEL REVESTIDOS DE SILICONE <br />
                # PAPEL TOALHA USADOS<br />
                # PAPEL VEGETAL<br />
                # ALGODÕES<br />
                # CANUDOS DE PLÁSTICO<br />
                # CELOFANE<br />
                # ESCOVA DE DENTE<br />
                # ESCOVA DE CABELO<br />
                # ESPELHOS<br />
                # PANFLETOS<br />
                # PAPEL DE EMBRULHO<br />
                # PAPEL CELOFANE<br />
                # PAPEL ENCERADO<br />
                # PAPEL ENCHARCADO<br />
              </Text>
            
          </Stack>
          </Flex>
        </CardBody>
      </Card>
    );
  }
  