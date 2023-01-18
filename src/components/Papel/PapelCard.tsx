import {
    Text,
    Stack,
    Heading,
    Image,
    CardBody,
    Card,
    Flex,
    Center
  } from "@chakra-ui/react";
  
  import papel from "../../assets/imgs/papel.png";
  import './style.css'
  
  export function PapelCard() {
    return (
      <Card align='center' backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
  <CardBody >
    
    <Stack spacing='3' textAlign='center'>
      <Heading mt='6' fontSize='4rem'>PAPEL</Heading>
      <Text className="text_papel" fontSize='1rem' >
                #EMBALAGEM DE OVO 
                #EMBALAGENS DE PRODUTOS DE HIGIENE
                #EMBALAGENS DE PRODUTOS DE LIMPEZA <br />
                #JORNAIS
                #LISTA TELEFÔNICA 
                #PAPÉIS DE DESENHOS
                #PAPÉIS DE ESCRITÓRIO<br />
                #PAPÉIS DE SEDA
                #PAPÉIS IMPRESSOS
                #PAPEL ALUMÍNIO
                #PAPEL FILTRANTE
                #PAPEL HELIOGRÁFICO<br />
                #PAPEL KRAFT
                #REVISTAS
      </Text>
      <Center>
      <Image 
       mt='6'
      align='center'
      src={papel}
      alt='Green double couch with wooden legs'
      borderRadius='lg'/>
      </Center>
      
    </Stack>
  </CardBody>
</Card>      
    );
  }