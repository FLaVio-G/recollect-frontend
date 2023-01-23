import {
  Text,
  CardFooter,
  Stack,
  Heading,
  Image,
  Button,
  CardBody,
  Card,
  Flex,
  Center,
} from "@chakra-ui/react";
import { Link as LinkRoute } from "react-router-dom";
import caixa from "../../assets/imgs/caixas.png";
import './style.css'

export function PrincipalCard() {
  return (

    <Card className="quem-somos-card" backdropFilter='auto' backdropBlur='40px' backgroundColor='none' ml='2%' mr='2%' border='1px solid white' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
      <CardBody>
        <Flex flexDirection={['column', 'row']}>
          <Stack  width={['100%', '50%']}>
            <CardBody>
              <Heading size="md" fontSize={["3rem", '4rem']} color="white" textAlign={['center', 'justify']}>
                Olá nós somos a<br></br>Recollect!!!
              </Heading>
              <Stack  >
                <Text className=".texto-quem-somos" fontSize="1rem" mt='6' color='white' textAlign='justify'>
                  A Recollect é uma empresa que tem como principal objetivo
                  incentivar pessoas comuns a reciclar seu lixo doméstico.
                  Acreditamos que o futuro do nosso planeta está nas mãos de cada um
                  de nós e que pequenas ações, como a reciclagem, tem um enorme
                  impacto no bem-estar do planeta. <br /> <br /> Nossa missão é te ajudar para que
                  a ação de reciclar se torne mais fácil e faça parte da sua rotina. <br /> <br />
                  Por meio da nossa plataforma de matchmaking, conectamos indivíduos
                  com empresas, organizações, coletivos e cooperativas de
                  reciclagem, incentivando a reciclagem de todos os tipos de
                  materiais com o intuito de transformar nosso planeta em um lugar
                  melhor.<br /> <br /> Não importa se você quer doar ou vender seu lixo, vamos te
                  conectar com as empresas mais perto de você, para que você possa
                  dar o destino correto ao seu lixo.<br /> <br /> Toda ação conta. Seja parte
                  dessa jornada.
                </Text>
              </Stack>

            </CardBody>
          </Stack>

          <Stack mt='8%' width={['100%', '50%']}>
            <Center>
              <Image src={caixa} width={['90%', '70%']} />
            </Center>

            <Center>
              <CardFooter>
                <Button mt='7' colorScheme="green" color='black' bg="white">
                  <LinkRoute to="/Contato">Entre em contato</LinkRoute>
                </Button>
              </CardFooter>
            </Center>

          </Stack>
        </Flex>
      </CardBody>
    </Card>
  );
}
