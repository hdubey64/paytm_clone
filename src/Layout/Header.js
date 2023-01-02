import React, { useState, useContext, useEffect } from "react";
import {
   Container,
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink,
} from "reactstrap";
import paytm_logo from "../Assets/Imegas/paytm_logo.png";
import { Link } from "react-router-dom";
import SignInButton from "../Components/SignInButton";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(!isOpen);

   return (
      <Container>
         <Navbar color="white" light expand="md">
            <NavbarBrand>
               <img src={paytm_logo} alt="Brand Pic" width={180} />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
               <Nav className="ms-auto">
                  <NavItem>
                     <NavLink className="text-black fs-5 fw-bold">
                        Paytm for Consumer
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="text-black fs-5 fw-bold">
                        Paytm for Business
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="text-black fs-5 fw-bold">
                        Invester Relation
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="text-black fs-5 fw-bold">
                        Company{" "}
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="text-black fs-5 fw-bold">
                        Career
                     </NavLink>
                  </NavItem>
               </Nav>
            </Collapse>{" "}
            <SignInButton />
         </Navbar>
      </Container>
   );
};

export default Header;
