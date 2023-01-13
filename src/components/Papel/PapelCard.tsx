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
  
  export function PapelCard() {
    return (
      <Card backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
        <CardBody>
          <Flex>
          <Stack maxW="960px" w='50%' >
            <CardBody>
              <Heading size="md" fontSize="4rem" color="white">
                Papel
                <br /> <br />                
              </Heading>
  
              <Text py="2" fontSize="1rem" color='white'>
                # EMBALAGEM DE OVO <br />
                # EMBALAGENS DE PRODUTOS DE HIGIENE<br />
                # EMBALAGENS DE PRODUTOS DE LIMPEZA<br />
                # JORNAIS<br />
                # LISTA TELEFÔNICA <br />
                # PAPÉIS DE DESENHOS<br />
                # PAPÉIS DE ESCRITÓRIO<br />
                # PAPÉIS DE SEDA<br />
                # PAPÉIS IMPRESSOS<br />
                # PAPEL ALUMÍNIO<br />
                # PAPEL FILTRANTE<br />
                # PAPEL HELIOGRÁFICO<br />
                # PAPEL KRAFT<br />
                # REVISTAS<br />
                
                
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
  