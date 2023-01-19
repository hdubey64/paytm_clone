import React from "react";
import { Container, Col, Row } from "reactstrap";
import Logo2 from "../../Assets/Imegas/paytm_logo2.png";
import Photo from "../../Assets/Imegas/abcd.webp";
import DownloadButton from "../../Components/DownloadButton";
import "./HeroSection.css";
export const HeroSection = () => {
   return (
      <>
         <p className="fs-6 py-2 tagLine text-center ">
            <b>No Wallet KYC Required</b> 😊 to pay using UPI on Paytm. Learn
            more.
         </p>
         <Container className=" heroContant ">
            <Row>
               <Col md={12} lg={6}>
                  <div className="logo">
                     <img src={Logo2} alt="" />
                     <h1 className="mt-5 heroTag">
                        India's Most-loved Payments App
                     </h1>
                     <p className="mt-2 fs-5 fw-bold">
                        Recharge & pay bills, book flights & movie tickets, open
                        a savings account, invest in stocks & mutual funds, and
                        do a lot more.
                     </p>
                     <DownloadButton />
                  </div>
               </Col>
               <Col md={12} lg={6} className=" pt-4">
                  <div className="heroBanner">
                     <img src={Photo} alt="" />
                  </div>
               </Col>
            </Row>
         </Container>
      </>
   );
};
