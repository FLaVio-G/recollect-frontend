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
      <Card className="card" align='center' backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
  <CardBody >
    
    <Stack mt='6' spacing='3' textAlign='center'>
      <Heading className="vidro" mt='6' fontSize='4rem'>PARCEIROS</Heading>
      <Center>
      <Text className="text" fontSize='1rem' >
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
    <CardBody className="cardbody">
      <Heading size='md'>Generate Lorem Ipsum placeholder</Heading>

      <Text py='2'>
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
    <CardBody className="cardbody">
      <Heading size='md'>Generate Lorem Ipsum placeholder</Heading>

      <Text py='2'>
      feugiat scelerisque varius morbi enim nunc faucibus a pellentesque 
      sit amet porttitor eget dolor morbi non arcu risus quis varius quam 
      quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse 
      faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing 
      elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi 
      </Text>
    </CardBody>
  </Stack>
</Card>
<Stack className="cadastrebtn">
      <Button colorScheme='green' bg='white'>
        Cadastre sua Empresa
      </Button>
</Stack>

    </Stack>
  </CardBody>
</Card>
    );
  }