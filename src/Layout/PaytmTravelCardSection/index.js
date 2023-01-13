import React from "react";
import { Container, Row, Col } from "reactstrap";
import HorizontalScrollTravel from "../../Components/HorizontalScrollTravel";
import MoneyCard from "../../Components/MoneyCard";
import "./style.css";

const PaytmTravelCardSection = () => {
   return (
      <div>
         <Container className="paytmTravelCardSectionSection">
            <div className="paytmTravelCardSectionInnerContent m-auto ">
               <Row>
                  <Col className="colContent" md={3} sm={12}>
                     <MoneyCard
                        img="https://assetscdn1.paytm.com/images/catalog/view/307197/1626419838546.png"
                        imgWidth="150"
                        imgHeight="59"
                        investParagraph="Best travel solutions with quick ticket bookings, great offers and easy refunds"
                        backgroudColor="backgroundWhite"
                        buttonText="Learn More"
                     />
                  </Col>
                  <Col sm={12} md={9}>
                     <HorizontalScrollTravel />
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   );
};

export default PaytmTravelCardSection;
