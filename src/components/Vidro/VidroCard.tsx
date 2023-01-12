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
  
  import vidro from "../../assets/imgs/vidro.png";
  
  export function VidroCard() {
    return (
      <Card>
        <CardBody backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px'>
          <Flex>
          <Stack maxW="960px" w='50%' >
            <CardBody>
              <Heading size="md" fontSize="4rem" color="white">
                VIDRO
                <br /> <br />                
              </Heading>
  
              <Text py="2" fontSize="1rem" color='white'>
                # CACOS DE VIDRO <br />
                # COPOS DE VIDRO<br />
                # FRASCOS DE CONDIMENTOS<br />
                # FRASCOS DE MOLHO<br />
                # FRASCOS DE PERFUME<br />
                # GARRAFAS DE BEBIDAS<br />
                # LUMINÁRIAS<br />
                # VIDROS DE AUTOMÓVEIS<br />
                # VIDROS DE JANELAS<br />
                
              </Text>
            </CardBody>
          </Stack>
  
          <Stack mt='5%'  w='50%'>
            <Center>
            <Image src={vidro}  w='50%' h='100%' />
            </Center>
            
            
          </Stack>
          </Flex>
        </CardBody>
      </Card>
    );
  }
  