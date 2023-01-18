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
      <Card align='center' backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
  <CardBody >
    
    <Stack spacing='3' textAlign='center'>
      <Heading mt='6' fontSize='4rem'>Resíduos Especiais</Heading>
    </Stack>

    <Stack textAlign='center' mt='6' className="texto_residuosespeciais">
    <Text fontSize='1rem' >
                #RESÍDUOS DE SAÚDE
                #ELETRÔNICOS
                #PILHAS E BATERIAS<br />
                #LÂMPADAS
                #ROUPAS E TECIDOS
                #ÓLEO DE COZINHA
                #REVISTAS
      </Text>
    </Stack>

    <Stack mt='6'>
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