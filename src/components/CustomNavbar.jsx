import { useState } from 'react';
import { NavLink as ReactLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';

const CustomNavbar =() => {

  const [isOpen, setIsOpen] =useState(false)
    return(
        <div>
      <Navbar color="dark"
    dark
    expand ="md"
    fixed=""
    >
        <NavbarBrand tag={ReactLink} to="/">Myblog</NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/singup">
                Signup
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle> 
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to="/service">Services</DropdownItem>
                <DropdownItem>Contact us</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="https://www.instagram.com/">Instagram</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText href="https://www.youtube.com/">Youtube</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    )
}
export default CustomNavbar