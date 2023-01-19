import React from "react";
import { Container, Row, Col } from "reactstrap";
import DownloadButton from "../DownloadButton";
import "./style.css";

const BusinessCard = ({
   saySomthing = "Give a me Para",
   tagLine = "Give Your Punch Line",
   banner = "",
   cardButton = <DownloadButton />,
}) => {
   return (
      <div className="businessCard">
         <Container className="card businessContent">
            <Row>
               <Col md={12} lg={6}>
                  <div className="businessInnerContent">
                     <h1 className="card-title">{tagLine}</h1>
                     <p className="card-text">{saySomthing}</p>
                     <div>{cardButton}</div>
                  </div>
               </Col>
               <Col md={12} lg={6} className="bannerStyle">
                  <img src={banner} alt="" />
               </Col>
            </Row>
         </Container>
      </div>
   );
};
export default BusinessCard;
