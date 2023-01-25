import React from "react";
import { Container, Row, Col } from "reactstrap";
import LearnMoreButton from "../Button/Button";

import "./style.css";

const BusinessCard = ({
   saySomthing = "Give a me Para",
   tagLine = "Give Your Punch Line",
   banner = "",
   cardButton = <LearnMoreButton />,
   bannerClass = "",
   bannerHeight = "",
}) => {
   return (
      <div className="businessCard">
         <Container>
            <div className=" businessContent">
               <Row>
                  <Col md={12} lg={6} className="m-auto">
                     <div className="businessCardColContent">
                        <div className="businessInnerContent">
                           <h1>{tagLine}</h1>
                           <p>{saySomthing}</p>
                           <div className="paytmMoneyButton">{cardButton}</div>
                        </div>
                     </div>
                  </Col>
                  <Col md={12} lg={6} className="m-auto colContent">
                     <div className={` ${bannerClass} bannerStyle`}>
                        <img src={banner} alt="" className={bannerClass} />
                     </div>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   );
};
export default BusinessCard;
