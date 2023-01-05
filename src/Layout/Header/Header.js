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
import paytm_logo from "../../Assets/Imegas/paytm_logo.png";
import { Link } from "react-router-dom";
import SignInButton from "../../Components/SignInButton";
import PaytmConsumer from "../../Components/Dropdowns/PaytmConsumer";
import PaytmBusiness from "../../Components/Dropdowns/PaytmBusiness";
import Company from "../../Components/Dropdowns/Company";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(!isOpen);

   return (
      <Container>
         <Navbar color="white" light expand="md">
            <NavbarBrand className="ps-0 ms-0">
               <img src={paytm_logo} alt="Brand Pic" width={180} />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
               <Nav className="ms-auto">
                  <NavItem>
                     <NavLink>
                        <PaytmConsumer />
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink>
                        <PaytmBusiness />
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="consumer">Invester Relation</NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink>
                        <Company />
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="consumer">Career</NavLink>
                  </NavItem>
               </Nav>
            </Collapse>{" "}
            <SignInButton />
         </Navbar>
      </Container>
   );
};

export default Header;
