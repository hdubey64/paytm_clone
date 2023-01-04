import React from "react";
import { Container, Col, Row } from "reactstrap";
import Logo2 from "../Assets/Imegas/paytm_logo2.png";
import Photo from "../Assets/Imegas/abcd.webp";
import DownloadButton from "../Components/DownloadButton";
import "./HeroSection.css";
export const HeroSection = () => {
   return (
      <>
         <p className="fs-6 py-2 tagLine text-center ">
            <b>No Wallet KYC Required</b> 😊 to pay using UPI on Paytm. Learn
            more.
         </p>
         <Container className="pt-5 heroContant ">
            <Row>
               <Col className="md-6 pt-5">
                  <div className="logo ps-5">
                     <img src={Logo2} alt="" width={80} />
                     <h1 className="mt-5 pe-5 heroTag">
                        India's Most-loved Payments App
                     </h1>
                     <p className=" pe-5 mt-2 fs-5 fw-bold">
                        Recharge & pay bills, book flights & movie tickets, open
                        a savings account, invest in stocks & mutual funds, and
                        do a lot more.
                     </p>
                     <DownloadButton />
                  </div>
               </Col>
               <Col className="md-6 pt-4">
                  <div className="me-0 heroBanner text-end">
                     <img src={Photo} alt="" width={528} />
                  </div>
               </Col>
            </Row>
         </Container>
      </>
   );
};
