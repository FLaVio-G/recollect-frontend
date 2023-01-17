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
  
  import residuos from '../../assets/imgs/residuos_especiais.png'
  import './style.css'
  
  export function ResiduosEspeciaisCard() {
    return (
      <Card className="card" align='center' backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
  <CardBody >
    
    <Stack mt='6' spacing='3' textAlign='center'>
      <Heading className="vidro" mt='6' fontSize='4rem'>Resíduos Especiais</Heading>
      <Text className="text_residuosespeciais" fontSize='1rem' >
                #RESÍDUOS DE SAÚDE
                #ELETRÔNICOS
                #PILHAS E BATERIAS<br />
                #LÂMPADAS
                #ROUPAS E TECIDOS
                #ÓLEO DE COZINHA
                #REVISTAS
      </Text>
      <Center>
      <Image 
      align='center'
      className="img"
      src={residuos}
      alt='Green double couch with wooden legs'
      borderRadius='lg'/>
      </Center>
      
    </Stack>
  </CardBody>
</Card>      
    );
  }