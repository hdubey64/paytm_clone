import React, { useState, useContext, useEffect } from "react";
import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink,
   NavbarText,
} from "reactstrap";
import paytm_logo from "../Assets/Imegas/paytm_logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(!isOpen);

   return (
      <Navbar color="white" light expand="md">
         <NavbarBrand>
            <img src={paytm_logo} alt="Brand Pic" width={180} />
         </NavbarBrand>
         <NavbarToggler onClick={toggle} />
         <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto">
               <NavItem>
                  <NavLink className="text-black">Paytm for Consumer</NavLink>
               </NavItem>
               <NavItem>
                  <NavLink className="text-black">Paytm for Business</NavLink>
               </NavItem>
               <NavItem>
                  <NavLink className="text-black">Invester Relation</NavLink>
               </NavItem>
               <NavItem>
                  <NavLink className="text-black">Company </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink className="text-black">Career</NavLink>
               </NavItem>
            </Nav>
         </Collapse>
      </Navbar>
   );
};

export default Header;
