import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react";
import { Link as LinkRoute } from "react-router-dom";
import './style.css'

export function Header() {
  return (
    <Flex className="header">

      <Button color="#1AA703" fontSize="3rem">
        <LinkRoute to="/Recollect">Recollect</LinkRoute>
      </Button>

      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
          color='green'
          className="menu-hamburgeur-header"
          height='50px'
          
        />
        <MenuList className="links-header" bgColor='green'>
          <MenuItem className="links-menu" bgColor='green'>
            <LinkRoute to="/QuemSomos">Quem Somos</LinkRoute>
          </MenuItem>
          <MenuItem className="links-menu" bgColor='green' >
            <LinkRoute to="/Reciclagem">Reciclagem</LinkRoute>
          </MenuItem>
          <MenuItem className="links-menu" bgColor='green'>
            <LinkRoute to="/Parceiros">Paceiros</LinkRoute>
          </MenuItem>
          <MenuItem className="links-menu" bgColor='green'>
            <LinkRoute to="/QueroReciclar">Quero Reciclar</LinkRoute>
          </MenuItem>
          <MenuItem className="links-menu" bgColor='green'>
            <LinkRoute to="/Login">Login</LinkRoute>
          </MenuItem>
        </MenuList>
      </Menu>



    </Flex>
  );
}
