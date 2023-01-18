import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import { Link as LinkRoute } from "react-router-dom";
import './style.css'

export function Header() {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      justifyContent="center"
      gap="3"
    > 
    <div className="header">
    <ButtonGroup>
      <Button color="#1AA703" fontSize="1.5rem">
          <LinkRoute to="/Recollect">Recollect</LinkRoute>
        </Button>
        <Button color="#1AA703" fontSize="1.5rem">
          <LinkRoute to="/QuemSomos">Quem somos</LinkRoute>
        </Button>
        <Button color="#1AA703" fontSize="1.5rem">
          <LinkRoute to="/Reciclagem">Reciclagem</LinkRoute>
        </Button>
        <Button color="#1AA703" fontSize="1.5rem">
          <LinkRoute to="/Parceiros"> Parceiros</LinkRoute>
        </Button>
        <Button color="#1AA703" fontSize="1.5rem">
          <LinkRoute to="/QueroReciclar">Quero Reciclar</LinkRoute>
        </Button>
        <Button color="#1AA703" fontSize="1.5rem">
          <LinkRoute to="/Login">Login</LinkRoute>
        </Button>
      </ButtonGroup>
    </div>
      
    </Flex>
  );
}
