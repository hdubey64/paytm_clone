import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CardSection.css";

const CardSection = () => {
   return (
      <div className="unlimitedCardSection">
         <Container>
            <div className="unlimitedCardContent">
               <Row>
                  <Col md={12} lg={6}>
                     <div className=" hdfcBank unlimitedColContent">
                        <div className=" unlimitedCardInnerContent">
                           <img
                              src="	https://assetscdn1.paytm.com/images/catalog/view_item/853975/1640242865113.png"
                              alt=""
                              width={185}
                              height={77}
                           />
                           <h1>Unlimited Cashback Every time.</h1>
                           <p>
                              Paytm HDFC Bank Select Credit Card. A card with
                              assured Cashback and incredible offers.
                           </p>
                        </div>

                        <div className=" debitCardBanner">
                           <img
                              src="https://assetscdn1.paytm.com/images/catalog/view_item/853975/1640241561388.png"
                              alt=""
                           />
                        </div>
                     </div>
                  </Col>
                  <Col md={12} lg={6}>
                     <div className=" sbiBank unlimitedColContent">
                        <div className="  unlimitedCardInnerContent ">
                           <img
                              src="	https://assetscdn1.paytm.com/images/catalog/view_item/853976/1640242163727.png"
                              alt=""
                              width={196}
                              height={20}
                              className="sbiIMgMargin"
                           />
                           <h1>India’s Most Sincere Credit Card</h1>
                           <p>
                              Paytm SBI Card SELECT - With Intelligent Features
                              & Great Rewards that Never Expire
                           </p>
                        </div>

                        <div className=" debitCardBanner">
                           <img
                              src="	https://assetscdn1.paytm.com/images/catalog/view_item/853976/1626079147084.png"
                              alt=""
                              className="bannerTopMargin"
                           />
                        </div>
                     </div>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   );
};

export default CardSection;
