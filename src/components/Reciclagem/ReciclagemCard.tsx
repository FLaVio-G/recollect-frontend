import {
    Text,
    CardFooter,
    Stack,
    Heading,
    Image,
    Button,
    CardBody,
    Card,
    Flex,
    Center,
    ButtonGroup
  } from "@chakra-ui/react";
  
  import caixa from "../assets/caixas.png";
  
  export function ReciclagemCard() {
    return (
      <Card>
        <CardBody backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px'>
        <Center>
                <Heading size="md" fontSize="4rem" color="white">
               RECICLAGEM
              </Heading>
                </Center>
          <Flex>
          <Stack maxW="960px" w='50%' >
            <CardBody>        
              <Text py="2" fontSize="1rem" color='white'>
              Antes de se conectar à nossas empresas parceiras e enviar seus materiais, existem algumas 
              informações importantes sobre o processo de reciclagem que você deve saber!<br /> <br /> 
              Existem dois tipos de resíduos, aqueles que podem ser recicláveis e aqueles que não podem 
              (esses são chamados de resíduos comuns). Para começar o processo de reciclagem, você vai precisar separar um do outro. <br /> <br />
              Veja abaixo uma lista de cada um deles:<br /> <br /> 
                    <Center>
                    <ButtonGroup variant='outline' spacing='6'>
                        <Button colorScheme='blue' bg='white'>Papel</Button>
                        <Button colorScheme='blue' bg='white'>Plástico</Button>
                        <Button colorScheme='blue' bg='white'>Vidro</Button>
                        <Button colorScheme='blue' bg='white'>Metal</Button>
                        <Button colorScheme='blue' bg='white'>Res. Não Recicláveis</Button>
                    </ButtonGroup> 
                    </Center><br />
                    

                    É muito importante que você limpe bem os materiais, <br />
                    tirando sobras de comida, líquidos ou produtos. <br />
                    O material também precisa estar seco.

              </Text>
            </CardBody>
          </Stack>
  
          <Stack  w='50%'>
          <CardBody>        
              <Text py="2" fontSize="1rem" color='white'>
              Depois de limpos, separe-os de acordo com as categorias que mencionamos (metais, papéis, vidros ou plásticos).<br /> <br /> 
              Recomendamos também que, se possível, compacte os resíduos para eles ocuparem menos espaço.<br /> <br />
              Agora que você já tem seus materiais limpos e separados, pode entrar em contato com uma das nossas empresas parceiras.<br /> <br /> 
                    <Center>
                    <ButtonGroup variant='outline' spacing='6'>
                        <Button colorScheme='blue' bg='white'>Parceiros</Button>
                        <Button colorScheme='blue' bg='white'>Quero Reciclar</Button>
                    </ButtonGroup> 
                    </Center><br />
                    

                    Além disso, alguns resíduos e materiais, devido a sua natureza, exigem descarte especial. 
                    Veja abaixo alguns deles.

                    <Center>
                    <ButtonGroup variant='outline' spacing='6'>
                        <Button colorScheme='blue' bg='white'>Resíduos Especiais</Button>
                    </ButtonGroup> 
                    </Center><br />

              </Text>
            </CardBody>
          </Stack>
          </Flex>
        </CardBody>
      </Card>
    );
  }
  