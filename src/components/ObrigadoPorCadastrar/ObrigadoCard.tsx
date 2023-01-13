import {
    Text,
    Stack,
    Heading,
    Image,
    CardBody,
    Card,
    Center,
    CardFooter,
    Button,
    ButtonGroup,
    Flex,
    Input
  } from "@chakra-ui/react";
  
  import forest from "../../assets/imgs/home-forest.png";
  import './style.css'

  
  export function ObrigadoCard(){
      return(
        <Card className="cadastro_card" backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
            <Center>
                <Heading size="md" fontSize="3.5rem" mt='10' color="white">
                    Obrigado por se cadastrar na Recollect!
                    <br /> <br />                 
                </Heading>
            </Center>

            <Center>

                <Stack className="stack">
                <Text className="text">
                    Vamos analisar suas informações e entraremos em contato para formalizar a inscrição. <br />
                    Os dados da sua empresa estarão disponíveis na nossa plataforma em breve.
                </Text>
                <Button className="btn" colorScheme='green' bg='white' width='20%'>Login</Button>
                </Stack>
                

            </Center>
            </Card>
      )
  }