import {
  Stack,
  Heading,
  Card,
  Center,
  Button,
  Flex,
  Input,
} from "@chakra-ui/react";

import "./style.css";
import { Link as LinkRoute } from "react-router-dom";

export function CadastroCard() {
  return (
    <Card
      className="novo-cadastro-card"
      backdropFilter="auto"
      backdropBlur="40px"
      ml="2%"
      mr="2%"
      border="1px"
      borderStartRadius="20px"
      borderEndRadius="20px"
      variant="outline"
    >
      
        <Heading className="titulo-novo-cadastro" fontSize="3.5rem" mt="10" textAlign='center' color="white">
          Novo Cadastro
          <br /> <br />
        </Heading>
      

      <Center>
        <Flex>
          <Stack className="coluna-nome-da-empresa" spacing={3} width="100%">
            <Input placeholder="Nome da empresa*" type="name" />
            <Input placeholder="Nome do responsável*" type="name" />
            <Input placeholder="E-mail da empresa*" type="name" />
            <Input placeholder="Telefone da empresa*" type="name" />
            <Input placeholder="Tipos de material que recicla?" type="name" />
            <Input placeholder="E-mail para login*" type="email" />
          </Stack>

          <Stack className="coluna-site-da-empresa" spacing={3} width="100%">
            <Stack className="coluna-site-tel-endereco" spacing={3}>
              <Input placeholder="Site da empresa" type="name" />
              <Input placeholder="Telefone do responsável" type="name" />
              <Input placeholder="Endereço da empresa*" type="name" />
            </Stack>

            <Stack className="coluna-cep-cidade-estado" spacing={3}>
              <Flex>
                <Input placeholder="CEP*" type="name" width="33%" />
                <Input placeholder="Cidade*" type="name" width="33%" />
                <Input placeholder="Estado*" type="name" width="33%" />
              </Flex>
            </Stack>

            <Stack className="coluna-senha-repetir-senha" spacing={3}>
              <Input
                placeholder="Retira o material em outros endereços?"
                type="name"
              />
              <Flex>
                <Input placeholder="Senha" type="password" width="50%" />
                <Input
                  placeholder="Repetir Senha"
                  type="password"
                  width="50%"
                />
              </Flex>
            </Stack>

            <Stack className='stack-c' align='end' >
              <Button className="botao-cadastrar" colorScheme="green" color='black' bg="white">
              <LinkRoute to="/ObrigadoPorCadastrar">Cadastrar</LinkRoute>
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Center>
    </Card>
  );
}
