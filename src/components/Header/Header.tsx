import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import { Link  as LinkRoute } from "react-router-dom"


export function Header() {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      justifyContent="center"
      gap="3"
    >
      <ButtonGroup gap="10" mt="10" mb='10' colorScheme='teal' variant='ghost'>
        <Button color="#1AA703" fontSize='1.5rem'>
          Recollect
        </Button>
        <LinkRoute to="/Login">login</LinkRoute>
        <Button color="#1AA703" fontSize='1.5rem'>
          Quem somos
        </Button>
        <Button color="#1AA703" fontSize='1.5rem'>
          Reciclagem
        </Button>
        <Button color="#1AA703" fontSize='1.5rem'>
          Parceiros
        </Button>
        <Button color="#1AA703" fontSize='1.5rem'>
          Quero Reciclar
        </Button>
        <Button color="#1AA703" fontSize='1.5rem'>
          Login
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
