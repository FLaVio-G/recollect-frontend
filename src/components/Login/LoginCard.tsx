import {
 
  Input,
  Card,
  CardBody,
  Heading,
  Link,
  ButtonGroup,
  Button,
  Stack,
  Center,
} from "@chakra-ui/react";

import { Link as LinkRoute } from "react-router-dom";

import "./style.css";

export function LoginCard() {
  return (
    <Card  className="card_login"
      backdropFilter="auto"
      backdropBlur="40px"
      ml="2%"
      mr="2%"
      border="1px"
      borderStartRadius="20px"
      borderEndRadius="20px"
      variant="outline"
    >
      <CardBody border='white'>
        <Heading size="md" fontSize="3.5rem" mt="10" color="white">
          Login
          <br /> <br />
        </Heading>

        <Center>
        <Stack className="input-email-senha-logincard">
          <Input placeholder="E-mail" type="email"/>
          <Input placeholder="Senha" type="password" />
        </Stack>
        </Center>
        
        <Center>
        <Stack className="entrar-cadastre-se-botoes">
          <ButtonGroup className="login_card_btn">
            <Button colorScheme="green" color='black' bg="white">
            <LinkRoute to="/Home">Entrar</LinkRoute>
            </Button>
            <Button colorScheme="green" color='black' bg="white">
              <LinkRoute to="/Cadastro">Cadastre-se</LinkRoute>
            </Button>
          </ButtonGroup>
        </Stack>
        </Center>
        <Stack className="link-esqueci-minha-senha">
          <Link
            as={LinkRoute}
            to="/EsqueciMinhaSenha"
            color="white"
          >
            Esqueci Minha Senha
          </Link>
        </Stack>
        <Center>

        </Center>
        
      </CardBody>
    </Card>
  );
}
