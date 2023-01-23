
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
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react'

import './style.css'

export function ContatoCard() {
  return (
    <Card
      className='contato-card'
      backdropFilter='auto'
      backdropBlur='40px'
      ml='2%' mr='2%'
      border='1px solid white'
      borderStartRadius='20px'
      borderEndRadius='20px'
      variant='outline'
      backgroundColor='none'
      >

      <CardBody className='card'  >

        <Heading textAlign='center' fontSize={["3rem", '4rem']} color="white">
          Entre em Contato!<br />
        </Heading>
        <Heading textAlign='center' mt='6' fontSize="1em" color="white">
          Ficou com alguma dúvida? Quer saber mais? Nos mande uma mensagem e, em breve, entraremos em contato.
        </Heading>

        <Stack className='icons'>

        </Stack>
        <Stack className='inputs-nome-e-sobrenome' align='center'>
          <Flex>
            <Input placeholder='Nome' type='text' color='white' />
            <Input placeholder='Sobrenome' type='text' />
          </Flex>

        </Stack>


        <Stack className='input-email-contato-card' align='center'>
          <Input placeholder='E-mail' type='email' width={['100%', '30%']} />
        </Stack>

        <Stack className='input-msg-contato-card' align='center'>
          <Input className='b' placeholder='Mensagem' type='text' width={['100%', '30%']} />
        </Stack>

        <Stack className='botao-enviar-contato-card' align='center'>
          <Popover>
            <PopoverTrigger>
              <Button className='contato_card_btn' colorScheme='green' bg='white' color='black' width={['100%', '10%']}>Enviar</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>Mensagem enviada com sucesso.</PopoverBody>
            </PopoverContent>
          </Popover>


        </Stack>

      </CardBody>


    </Card>


  )
}