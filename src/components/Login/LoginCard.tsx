
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

  import './style.css'

export function LoginCard(){
    return(
        <Card>
            <CardBody className='card' backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px'>
            
            <Heading size="md" fontSize="3.5rem" mt='10' color="white">
                login
                <br /> <br />                 
              </Heading>
              <Stack className='stack' spacing={3}>
              
                        <Input placeholder='E-mail' type='email' width='30%'/> 
                        <Input placeholder='Senha' type='password' width='30%'/>      
                
              </Stack>
              
              <Stack className='stack'>
              <ButtonGroup className='btn' variant='outline' spacing='6'>
                <Button colorScheme='blue' bg='white'>Entrar</Button>
                <Button colorScheme='blue' bg='white'>Cadastre-se</Button>
                </ButtonGroup> 
                </Stack> 
                <Stack>
                <Link className='link' color='white'>Esqueci Minha Senha/Redefinir Senha</Link>
                </Stack>
                

            </CardBody>
            
  
        </Card>

        
    )
}