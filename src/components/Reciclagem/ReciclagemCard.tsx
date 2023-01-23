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
  ButtonGroup
} from "@chakra-ui/react";
import { Link as LinkRoute } from "react-router-dom";
import './style.css'

export function ReciclagemCard() {
  return (
    <Card className="reciclagem-card" backdropFilter='auto' backdropBlur='40px' backgroundColor='none' ml='2%' mr='2%' border='1px solid white' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
      <CardBody>
        <Center>
          <Heading size="md" fontSize={['3rem', '4rem']} color="white">
            RECICLAGEM
          </Heading>
        </Center>
        <Flex flexDirection={['column', 'row']}>
          <Stack width={['100%', '50%']} >
            <CardBody>
              <Text py="2" fontSize="1rem" color='white' textAlign='justify'>
                Antes de se conectar à nossas empresas parceiras e enviar seus materiais, existem algumas
                informações importantes sobre o processo de reciclagem que você deve saber!<br /> <br />
                Existem dois tipos de resíduos, aqueles que podem ser recicláveis e aqueles que não podem
                (esses são chamados de resíduos comuns). Para começar o processo de reciclagem, você vai precisar separar um do outro. <br /> <br />
                Veja abaixo uma lista de cada um deles:<br /> <br />
              </Text>
              <Center>
                <ButtonGroup spacing='6' flexWrap={['wrap']}>
                  <Button mt='4' colorScheme="green" color='black' bg="white"><LinkRoute to="/Papel">Papel</LinkRoute></Button>
                  <Button mt='4' colorScheme="green" color='black' bg="white"><LinkRoute to="/Plastico">Plástico</LinkRoute></Button>
                  <Button mt='4' colorScheme="green" color='black' bg="white"><LinkRoute to="/Vidro">Vidro</LinkRoute></Button>
                  <Button mt='4' colorScheme="green" color='black' bg="white"><LinkRoute to="/Metal">Metal</LinkRoute></Button>
                  <Button mt='4' colorScheme="green" color='black' bg="white"><LinkRoute to="/ResiduosComuns">Não Recicláveis</LinkRoute></Button>
                </ButtonGroup>
              </Center><br />

              <Text textAlign='justify' color='white'>
                É muito importante que você limpe bem os materiais,
                tirando sobras de comida, líquidos ou produtos.
                O material também precisa estar seco.
              </Text>



            </CardBody>
          </Stack>

          <Stack width={['100%', '50%']}>
            <CardBody>
              <Text py="2" fontSize="1rem" color='white' textAlign='justify'>
                Depois de limpos, separe-os de acordo com as categorias que mencionamos (metais, papéis, vidros ou plásticos).<br /> <br />
                Recomendamos também que, se possível, compacte os resíduos para eles ocuparem menos espaço.<br /> <br />
                Agora que você já tem seus materiais limpos e separados, pode entrar em contato com uma das nossas empresas parceiras.<br /> <br />
                <Center>
                  <ButtonGroup spacing='6'>
                    <Button colorScheme="green" color='black' bg="white"><LinkRoute to="/Parceiros">Parceiros</LinkRoute></Button>
                    <Button colorScheme="green" color='black' bg="white"><LinkRoute to="/QueroReciclar">Quero Reciclar</LinkRoute></Button>
                  </ButtonGroup>
                </Center><br />


                Além disso, alguns resíduos e materiais, devido a sua natureza, exigem descarte especial.
                Veja abaixo alguns deles.

                <Center>
                  <ButtonGroup spacing='6'>
                    <Button mt='6' colorScheme="green" color='black' bg="white"><LinkRoute to="/ResiduosEspeciais">Resíduos Especiais</LinkRoute></Button>
                  </ButtonGroup>
                </Center><br />

              </Text>
            </CardBody>
          </Stack>
        </Flex>
      </CardBody>
    </Card>
  );
}
