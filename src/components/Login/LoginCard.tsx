
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
  } from '@chakra-ui/react'

  import './style.login.css'

export function LoginCard(){
    return(
        <Card backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
            <CardBody className='card'  >
            
            <Heading size="md" fontSize="3.5rem" mt='10' color="white">
                Login
                <br /> <br />                 
              </Heading>
              <Stack className='stack'>
              
                        <Input placeholder='E-mail' type='email' width='30%'/> 
                        <Input placeholder='Senha' type='password' width='30%'/>      
                
              </Stack>
              
              <Stack className='stack'>
              <ButtonGroup className='btn'>
                <Button colorScheme='green' bg='white'>Entrar</Button>
                <Button colorScheme='green' bg='white'>Cadastre-se</Button>
                </ButtonGroup> 
                </Stack> 
                <Stack>
                <Link className='link' color='white'>Esqueci Minha Senha</Link>
                </Stack>
                

            </CardBody>
            
  
        </Card>

        
    )
}