import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Instrument from "../../Components/Payment Instrumnet/Instrument";
import "./CardSection.css";

const CardSection = () => {
   return (
      <div className="cardSection">
         <Container>
            <Row className="cardContent">
               <Col md-6 className="card innerContent me-4">
                  <div className="p-4">
                     <img
                        src="	https://assetscdn1.paytm.com/images/catalog/view_item/853975/1640242865113.png"
                        alt=""
                        width={185}
                     />
                     <h1>Unlimited Cashback Every time.</h1>
                     <p>
                        Paytm HDFC Bank Select Credit Card. A card with assured
                        Cashback and incredible offers.
                     </p>
                  </div>
                  <div className=" cardBanner">
                     <img
                        src="https://assetscdn1.paytm.com/images/catalog/view_item/853975/1640241561388.png"
                        alt=""
                        width={463}
                     />
                  </div>
               </Col>
               <Col md-6 className="card innerContent ms-4 ">
                  <div className="p-4">
                     <img
                        src="	https://assetscdn1.paytm.com/images/catalog/view_item/853976/1640242163727.png"
                        alt=""
                        width={185}
                        className="pt-5"
                     />
                     <h1>India’s Most Sincere Credit Card</h1>
                     <p>
                        Paytm SBI Card SELECT - With Intelligent Features &
                        Great Rewards that Never Expire
                     </p>
                  </div>
                  <div className=" cardBanner">
                     <img
                        src="	https://assetscdn1.paytm.com/images/catalog/view_item/853976/1626079147084.png"
                        alt=""
                        width={463}
                        className="pt-2"
                     />
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default CardSection;
