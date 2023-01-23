import {
    Text,
    Stack,
    Heading,
    Image,
    CardBody,
    Card,
    Center,
    CardFooter,
    Button,
    ButtonGroup,
    Flex,
    Input,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger
} from "@chakra-ui/react";
import { Link as LinkRoute } from "react-router-dom";
import './style.css'
import {Company} from "../../model/company.type"
import React, { useState } from 'react';

export function DashboardCard() {
    const jwt = localStorage.getItem('token') || ''
    const payload  = JSON.parse(window.atob(jwt.split('.')[1]))
    const [company, setCompany] = useState<Company>(payload.company);
    console.log(company)
    
    return (
        <Card className="dashboard-card"
            backdropFilter='auto'
            backdropBlur='40px'
            ml='2%' mr='2%'
            border='1px solid white'
            borderStartRadius='20px'
            borderEndRadius='20px'
            variant='outline'
            backgroundColor='none'
            >

            <Center>
                <Heading fontSize={["3rem", '4rem']} mt='6' color="white" textAlign='center'>
                    Dashboard da Empresa
                    <br /> <br />
                </Heading>
            </Center>

            <Center>
                <Flex>
                    <Stack className="coluna-nome-da-empresa-dashboard-card" spacing={3} mt={["-5", '-10']} width='100%'>
                        <Input placeholder='Nome da empresa*' value={company.companyName} type='name' />
                        <Input placeholder='Nome do responsável*' value={company.responsibleName} type='name' />
                        <Input placeholder='E-mail da empresa*' value={company.companyEmail} type='name' />
                        <Input placeholder='Telefone da empresa*' value={company.phone} type='name' />
                        <Input placeholder='Tipos de material que recicla?' value={company.typesOfMaterialYouRecycle} type='name' />
                        <Input placeholder='E-mail para login*' type='email' value={company.loginEmail} />
                    </Stack>

                    <Stack className="coluna-site-da-empresa-dashboard-card" spacing={3} mt={["-5", '-10']} width='100%'>
                        <Stack className="stack_b1" spacing={3}>
                            <Input placeholder='Site da empresa' value={company.site} type='name' />
                            <Input placeholder='Telefone do responsável' value={company.responsiblePhone} type='name' />
                            <Input placeholder='Endereço da empresa*' value={company.address?.street} type='name' />
                        </Stack>

                        <Stack spacing={3}>
                            <Flex flexDirection={['row', 'row']}>
                                <Input placeholder='CEP*' type='name' value={company.address?.zip} width={['100%', '33%']} />
                                <Input placeholder='Cidade*' type='name' value={company.address?.city} width={['100%', '33%']} />
                                <Input placeholder='Estado*' type='name' value={company.address?.state} width={['100%', '33%']} />
                            </Flex>
                        </Stack>

                        <Stack spacing={3}>
                            <Input placeholder='Retira o material em outros endereços?' value={company.removeTheMaterialAtAnotherAddress} type='name' />
                        </Stack>

                        <Stack className="botao-alterar-e-atualizar-dashboard-card">
                            <Flex>
                                <Button className="btn-alterar" colorScheme='green' bg='white' color='black'><LinkRoute to="/RedefinirSenha">Alterar Senha</LinkRoute></Button>

                                <Popover>
                                    <PopoverTrigger>
                                        <Button colorScheme='green' bg='white' color='black'>Atualizar</Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverBody>Informações atualizadas com sucesso.</PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </Flex>
                        </Stack>

                    </Stack>
                </Flex>
            </Center>
        </Card>
    )
}


