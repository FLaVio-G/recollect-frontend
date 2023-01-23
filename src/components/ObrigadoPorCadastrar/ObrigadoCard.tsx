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

import { Link as LinkRoute } from "react-router-dom";
import './style.css'


export function ObrigadoCard() {
    return (
        <Card className="obrigado-card" backdropFilter='auto' backdropBlur='40px' backgroundColor='none' ml='2%' mr='2%' border='1p1px solid whitex' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
            <Center>
                <Heading size="md" fontSize={["3rem", '4rem']} mt='10' color="white" textAlign='center'>
                    Obrigado por se cadastrar na Recollect!
                    <br /> <br />
                </Heading>
            </Center>

            <Center>

                <Stack className="obrigado-card-texto-e-botao-enviar" align='center'>
                    <Text className="obrigado-card-texto" align='center' fontSize='1.1rem' color='white'>
                        Vamos analisar suas informações e entraremos em contato para formalizar a inscrição. <br />
                        Os dados da sua empresa estarão disponíveis na nossa plataforma em breve.
                    </Text>
                    <Button className="obrigado-card-botao-enviar" colorScheme='green' bg='white' color='black'><LinkRoute to="/Login">Login</LinkRoute></Button>
                </Stack>


            </Center>
        </Card>
    )
}