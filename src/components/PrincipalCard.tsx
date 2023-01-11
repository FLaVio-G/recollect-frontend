import {
  Text,
  CardFooter,
  Stack,
  Heading,
  Image,
  Button,
  CardBody,
  Card,
  Flex
} from "@chakra-ui/react";

import caixa from "../assets/caixas.png";

export function PrincipalCard() {
  return (
    <Card>
      <CardBody backdropFilter='auto' backdropBlur='10px' >
        <Flex>
        <Stack w='1000px'>
          <CardBody>
            <Heading size="md" fontSize="5xl" color="black">
              Olá nós somos a<br></br>Recollect
            </Heading>

            <Text py="2" fontSize="2xl">
              A Recollect é uma empresa que tem como principal objetivo
              incentivar pessoas comuns a reciclar seu lixo doméstico.
              Acreditamos que o futuro do nosso planeta está nas mãos de cada um
              de nós e que pequenas ações, como a reciclagem, tem um enorme
              impacto no bem-estar do planeta. Nossa missão é te ajudar para que
              a ação de reciclar se torne mais fácil e faça parte da sua rotina.
              Por meio da nossa plataforma de matchmaking, conectamos indivíduos
              com empresas, organizações, coletivos e cooperativas de
              reciclagem, incentivando a reciclagem de todos os tipos de
              materiais com o intuito de transformar nosso planeta em um lugar
              melhor. Não importa se você quer doar ou vender seu lixo, vamos te
              conectar com as empresas mais perto de você, para que você possa
              dar o destino correto ao seu lixo. Toda ação conta. Seja parte
              dessa jornada.
            </Text>
          </CardBody>
        </Stack>

        <Stack>
          <Image src={caixa} />

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Entre em contato
            </Button>
          </CardFooter>
        </Stack>
        </Flex>
      </CardBody>
    </Card>
  );
}
