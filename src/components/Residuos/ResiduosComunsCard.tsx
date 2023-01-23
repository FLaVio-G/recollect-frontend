import {
  Text,
  Stack,
  Heading,
  Image,
  CardBody,
  Card,
  Flex,
  Center,
  Button
} from "@chakra-ui/react";
import { Link as LinkRoute } from "react-router-dom";

export function ResiduosComunsCard() {
  return (
    <Card className="residuos-comuns-card" align='center' backdropFilter='auto' backdropBlur='40px' backgroundColor='none' ml='2%' mr='2%' border='1px solid white' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
      <CardBody >

        <Stack>
          <Heading mt='6' fontSize={['3rem', '4rem']} color="white" textAlign='center'>
            RESÍDUOS NÃO RECICLÁVEIS
            <br /> <br />
          </Heading>
        </Stack>

        <Stack align='center'>
          <Flex>
            <Stack>
              <Text className="texto-card-naoreciclaveis" fontSize="1rem" color='white' align='center'>
                # BITUCAS DE CIGARRO <br />
                # CALÇADOS INUTILIZÁVEIS<br />
                # CRISTAIS<br />
                # EMBALAGENS METALIZADAS<br />
                # ESPONJAS DE AÇO<br />
                # ESPONJAS DE LIMPEZA<br />
                # ETIQUETAS ADESIVAS<br />
                # FIO DENTAL<br />
                # FOTOGRAFIAS<br />
                # FRALDAS<br />
                # GALHOS<br />
                # NEGATIVOS DE FILMES<br />
                # PANOS<br />
                # PAPEL ADESIVO<br />
              </Text>
            </Stack>

            <Stack>
              <Text className="texto-card-naoreciclaveis" fontSize="1rem" color='white' align='center'>
                # PAPEL REVESTIDOS DE SILICONE <br />
                # PAPEL TOALHA USADOS<br />
                # PAPEL VEGETAL<br />
                # ALGODÕES<br />
                # CANUDOS DE PLÁSTICO<br />
                # CELOFANE<br />
                # ESCOVA DE DENTE<br />
                # ESCOVA DE CABELO<br />
                # ESPELHOS<br />
                # PANFLETOS<br />
                # PAPEL DE EMBRULHO<br />
                # PAPEL CELOFANE<br />
                # PAPEL ENCERADO<br />
                # PAPEL ENCHARCADO<br />
              </Text>
            </Stack>

          </Flex>
          <Center>
            <Button mt='6' colorScheme="green" color='black' bg="white"><LinkRoute to="/Reciclagem">Voltar</LinkRoute></Button>
          </Center>
        </Stack>









      </CardBody>
    </Card>
  );
}
