import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" mb="20">
      <Box p="2">
        <Heading size="md">RECOLLECT App</Heading>
      </Box>
      <Spacer />
      <ButtonGroup mr="5" gap="2">
        {/* <Link to= '/page1'> page 1</Link> */}
        <Button colorScheme="teal">Recollect</Button>
        <Button colorScheme="teal">Quem somos</Button>
        <Button colorScheme="teal">Reciclagem</Button>
        <Button colorScheme="teal">Parceiros</Button>
        <Button colorScheme="teal">Quero reciclar</Button>
        <Button colorScheme="teal">Login</Button>
      </ButtonGroup>
    </Flex>
  );
}
