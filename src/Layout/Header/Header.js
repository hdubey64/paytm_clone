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
import InvesterRelation from "../../Components/Dropdowns/InvesterRelation";
import Career from "../../Components/Dropdowns/Career";
import "./style.css";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(!isOpen);

   return (
      <Container>
         <Navbar color="white" light expand="xl">
            <NavbarBrand className="ps-0 ms-0">
               <img src={paytm_logo} alt="Brand Pic" width={180} />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
               <Nav className="navContent text-end">
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
                     <NavLink>
                        <InvesterRelation />
                     </NavLink>
                  </NavItem>
                  <NavItem className="xxlHidden">
                     <NavLink>
                        <Company />
                     </NavLink>
                  </NavItem>
                  <NavItem className="xxlHidden">
                     <NavLink>
                        <Career />
                     </NavLink>
                  </NavItem>
                  <div className="xlHidden">
                     <SignInButton />
                  </div>
               </Nav>
            </Collapse>{" "}
            <div className="lgHidden">
               <SignInButton />
            </div>
         </Navbar>
      </Container>
   );
};

export default Header;
