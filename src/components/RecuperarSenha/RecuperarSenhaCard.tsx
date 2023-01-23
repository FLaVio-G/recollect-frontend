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
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger
} from "@chakra-ui/react";

import './style.css'


export function RecuperarSenhaCard() {
  return (
    <Card className="card-recuperar-senha" align='center' backdropFilter='auto' backdropBlur='40px' backgroundColor='none' ml='2%' mr='2%' border='1px solid white' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
      <CardBody >

        <Stack mt='6' spacing='3' textAlign='center'>
          <Center>
            <Heading size="md" fontSize="3.5rem" mt='10' color="white">
              Recuperação de Senha
              <br /> <br />
            </Heading>
          </Center>

          <Center>

            <Stack className="input-email" spacing={3} width='70%'>
              <Input className="input-email-recuperar-senha" placeholder='e-mail' type='email' />
              <Popover>
                <PopoverTrigger>
                  <Button className="botao-enviar-recuperar-senha" colorScheme="green" color='black' bg="white" alignItems='center'>Enviar</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>Você receberá as instruções para redefinição de senha por e-mail.</PopoverBody>
                </PopoverContent>
              </Popover>

            </Stack>

          </Center>

        </Stack>
      </CardBody>
    </Card>
  )
}


