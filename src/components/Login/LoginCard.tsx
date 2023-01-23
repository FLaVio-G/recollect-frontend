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
import { useState } from "react";
import  { redirect } from 'react-router-dom'
import { Link as LinkRoute } from "react-router-dom";
import api from "../../services/api";

import "./style.css";
interface LoginInfo{
  loginEmail: string,
  password: string
}

async function Login(email: string, senha: string) {
  try{
  const response = await api.post<any>("/login", {loginEmail: email, password: senha });
  localStorage.setItem('token', response.data);
  window.location.assign('/Dashboard');  
  } catch(err){
    console.log(err)
  }
  
  
}
export function LoginCard() {
  const [email, setEmail] = useState<string>(''); 
  const [senha, setSenha] = useState<string>(''); 
  const  handleLogin = async () => {
    await Login(email, senha)
  }

  return (
    <Card className="card_login"
      backdropFilter="auto"
      backdropBlur="40px"
      ml="2%"
      mr="2%"
      border="1px solid white"
      borderStartRadius="20px"
      borderEndRadius="20px"
      variant="outline"
      backgroundColor='none'
    >
      <CardBody border='white'>
        <Heading fontSize={['3rem', '4rem']} color="white">
          Login
          <br /> <br />
        </Heading>

        <Center>
          <Stack className="input-email-senha-logincard">
            <Input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
            <Input placeholder="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
          </Stack>
        </Center>

        <Center>
          <Stack className="entrar-cadastre-se-botoes">
            <ButtonGroup className="login_card_btn" mt='10'>
              <Button colorScheme="green" color='black' bg="white" onClick={handleLogin}>
                <Link>Entrar</Link>
              </Button>
              <Button colorScheme="green" color='black' bg="white">
                <LinkRoute to="/Cadastro">Cadastre-se</LinkRoute>
              </Button>
            </ButtonGroup>
          </Stack>
        </Center>
        <Stack className="link-esqueci-minha-senha" mt='6' mb='6'> 
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
