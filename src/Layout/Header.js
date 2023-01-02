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
                  <NavLink className="text-black fw-bold">
                     Paytm for Consumer
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink className="text-black fw-bold">
                     Paytm for Business
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink className="text-black fw-bold">
                     Invester Relation
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink className="text-black fw-bold">Company </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink className="text-black fw-bold">Career</NavLink>
               </NavItem>
            </Nav>
         </Collapse>
      </Navbar>
   );
};

export default Header;
