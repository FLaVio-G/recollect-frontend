import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import {} from "react-router-dom";

export function Header() {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      justifyContent="center"
      gap="3"
    >
      <ButtonGroup gap="10" mt="10">
        <Button color="green" fontSize="28">
          Recollect
        </Button>
        <Button color="green" fontSize="28">
          Quem somos
        </Button>
        <Button color="green" fontSize="28">
          Reciclagem
        </Button>
        <Button color="green" fontSize="28">
          Parceiros
        </Button>
        <Button color="green" fontSize="28">
          Quero Reciclar
        </Button>
        <Button color="green" fontSize="28">
          Quero Reciclar
        </Button>
        <Button color="green" fontSize="28">
          Login
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
