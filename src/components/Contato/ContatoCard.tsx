
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Card,
    CardBody,
    Center,
    Heading,
    Link,
    ButtonGroup,
    Button,
    Stack,
    Flex,
  } from '@chakra-ui/react'
  
  import './style.css'

export function ContatoCard(){
    return(
        <Card backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
            <CardBody className='card'  >
            
            <Heading size="md" fontSize="3.5rem" mt='10' color="white">
                 Entre em Contato!<br />                                
            </Heading>
            <Heading size="md" fontSize="1em" color="white">
                Ficou com alguma dúvida? Quer saber mais? Nos mande uma mensagem e, em breve, entraremos em contato.
            </Heading>
            
              <Stack className='icons'>
              
              </Stack>
              <Stack className='stack_a'>   
                <Flex>
                    <Input placeholder='Nome' type='text'/> 
                    <Input placeholder='Sobrenome' type='text'/>
                </Flex>           
                                          
              </Stack>
              
              
              <Stack className='stack_b'>              
                        <Input placeholder='E-mail' type='email' width='30%'/>                 
              </Stack>

              <Stack className='stack_c'>              
                        <Input className='b' placeholder='Mensagem' type='text' width='30%'/>                  
              </Stack>
              
                <Stack className='stack_c'>
                    
                        <Button className='contato_card_btn' colorScheme='green' bg='white'>Enviar</Button>
                     
                </Stack> 
               
                

            </CardBody>
            
  
        </Card>

        
    )
}