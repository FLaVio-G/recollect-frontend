import {
  Text,
  Stack,
  Heading,
  Image,
  CardBody,
  Card,
  Flex,
  Center,
  CardFooter,
  Button
} from "@chakra-ui/react";

import { Link as LinkRoute } from "react-router-dom";
import './style.css';
import parceiros from "../../assets/imgs/parceiros_img.png";

export function ParceirosCard() {
  return (
    <Card className="parceiros-card" align='center' backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px solid white' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
      <CardBody >

        <Stack spacing='3' textAlign='center'>
          <Heading fontSize='4rem' color='white'>PARCEIROS</Heading>
          <Center>
            <Text className="texto-parceiros-card" fontSize='1rem' color='white' >
              A Recollect conta com inúmeras empresas parceiras que vão te apoiar no processo de descarte e reciclagem do seu lixo. <br />
              Abaixo, você poderá ver uma lista completa dos nossos parceiros, com detalhes sobre contato, materiais que eles reciclam e endereço. <br />
              Caso queria buscar as empresas por proximidade do seu endereço, <LinkRoute className="linkroute" to="/Recollect">clique aqui</LinkRoute>.<br />
            </Text>
          </Center>

        </Stack>
        <Stack>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', md: '400px' }}
              src={parceiros}
              alt='Caffe Latte'
            />

            <Stack>
              <CardBody className="texto-descritivo-empresa">
                <Heading color='white'>Generate Lorem Ipsum placeholder</Heading>

                <Text py='2' color='white'>
                  feugiat scelerisque varius morbi enim nunc faucibus a pellentesque
                  sit amet porttitor eget dolor morbi non arcu risus quis varius quam
                  quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse
                  faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing
                  elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', md: '400px' }}
              src={parceiros}
              alt='Caffe Latte'
            />

            <Stack>
              <CardBody className="texto-descritivo-empresa">
                <Heading color='white'>Generate Lorem Ipsum placeholder</Heading>

                <Text py='2' color='white'>
                  feugiat scelerisque varius morbi enim nunc faucibus a pellentesque
                  sit amet porttitor eget dolor morbi non arcu risus quis varius quam
                  quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse
                  faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing
                  elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi
                </Text>
              </CardBody>
            </Stack>
          </Card>
          <Stack >
            <Button className="botao-cadastre-sua-empresa" colorScheme='green' color='black' bg='white'>
              <LinkRoute to="/Cadastro">Cadastre sua Empresa</LinkRoute>
            </Button>
          </Stack>

        </Stack>
      </CardBody>
    </Card>
  );
}