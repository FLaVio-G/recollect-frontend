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

  
  export function CadastroCard(){
      return(
        <Card className="cadastro_card" backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
            <Center>
            <Heading size="md" fontSize="3.5rem" mt='10' color="white">
                Novo Cadastro
                <br /> <br />                 
              </Heading>
            </Center>

            <Center>
                <Flex>

                    <Stack className='stack_a' spacing={3}  width='100%'>
                    <Input placeholder='Nome da empresa*' type='name'/> 
                    <Input placeholder='Nome do responsável*' type='name'/>
                    <Input placeholder='E-mail da empresa*' type='name'/>
                    <Input placeholder='Telefone da empresa*' type='name'/>
                    <Input placeholder='Tipos de material que recicla?' type='name'/>
                    <Input placeholder='E-mail para login*' type='email'/>
                    </Stack>

                    <Stack className="stack_b" spacing={3}  width='100%'>
                        <Stack className="stack_b1" spacing={3}>
                                <Input placeholder='Site da empresa' type='name'/> 
                                <Input placeholder='Telefone do responsável' type='name'/>
                                <Input placeholder='Endereço da empresa*' type='name'/> 
                        </Stack>

                        <Stack className='stack_b2' spacing={3}>
                            <Flex>
                                <Input placeholder='CEP*' type='name' width='33%'/> 
                                <Input placeholder='Cidade*' type='name' width='33%'/>
                                <Input placeholder='Estado*' type='name' width='33%'/>
                            </Flex>          
                        </Stack>

                        <Stack className="stack_b3" spacing={3}>
                                <Input placeholder='Retira o material em outros endereços?' type='name'/> 
                            <Flex>
                                <Input placeholder='Senha' type='password' width='50%'/>
                                <Input placeholder='Repetir Senha' type='password' width='50%'/>
                            </Flex>
                        </Stack>
                        <Stack className="btn">
                            <Button colorScheme='green' bg='white'>Cadastrar</Button>
                            </Stack>
                    </Stack>
                </Flex>
            </Center>
            
            
        </Card>
      )
  }
  