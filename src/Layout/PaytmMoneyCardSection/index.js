import React from "react";
import { Container, Row, Col } from "reactstrap";
import HorizontalScroll from "../../Components/HorizontalScroll";
import MoneyCard from "../../Components/MoneyCard";
import "./style.css";

const PaytmMoneyCard = () => {
   return (
      <div>
         <Container className="paytmMoneyCardSection">
            <div className="paytmMoneyCardInnerContent m-auto ">
               <Row>
                  <Col className="colContent" md={3} sm={12}>
                     <MoneyCard
                        img="https://assetscdn1.paytm.com/images/catalog/view/307196/1626420555412.png"
                        imgWidth="150"
                        imgHeight="59"
                        investParagraph="Get started on wealth creation journey with Zero brokerage fee & no hidden charges."
                        backgroudColor="backgroundWhite"
                        buttonText="Learn More"
                     />
                  </Col>
                  <Col sm={12} md={9}>
                     <HorizontalScroll />
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   );
};

export default PaytmMoneyCard;
