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
    PopoverTrigger
} from "@chakra-ui/react";

import './style.css'


export function RedefinirSenhaCard() {
    return (
        <Card align='center' className="redefinir-senha-card" backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px solid white' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>

            <Heading fontSize="3.5rem" mt='6' color="white" >
                Redefinir Senha
                <br /> <br />
            </Heading>

            <Stack className="redefinir-senha-inputs" spacing={3} >
                <Input placeholder='Nova Senha' type='password' />
                <Input placeholder='Repetir Nova Senha' type='password' />
            </Stack>

            <Stack>
                <Popover>
                    <PopoverTrigger>
                        <Button mt='6' mb='6' className="btn" colorScheme='green' bg='white'>Enviar</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody>Senha alterada com sucesso.</PopoverBody>
                    </PopoverContent>
                </Popover>
            </Stack>



        </Card>
    )
}
