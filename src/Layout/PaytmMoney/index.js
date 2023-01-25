import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LearnMoreButton from "../../Components/Button/Button";
import "./style.css";

const PaytmMoney = () => {
   return (
      <div className="paytmMoneySection">
         <Container>
            <div className="paytmMoneyContent">
               <Row>
                  <Col md={12} lg={6}>
                     <div className="paytmMoneyColContent">
                        <div className="paytmMoneyInnerContent bannerPaytmMoneyInnerContent">
                           <img
                              src="https://assetscdn1.paytm.com/images/catalog/view_item/788781/1626077377376.png"
                              alt=""
                           />
                        </div>
                     </div>
                  </Col>
                  <Col md={12} lg={6}>
                     <div className="paytmMoneyColContent">
                        <div className="paytmMoneyInnerContent">
                           <div>
                              <img
                                 src="https://assetscdn1.paytm.com/images/catalog/view/308774/1617696247991.png
                  "
                                 alt=""
                                 width={145}
                              />
                           </div>

                           <h1>Build Long-term Wealth & Achieve your Goals.</h1>
                           <p>
                              Investing on Paytm Money is transparent, low-cost
                              and commission-free. Buy stocks & mutual funds
                              that can help you create wealth & realise your
                              dreams.
                           </p>
                           <div className="paytmMoneyButton my-5">
                              <LearnMoreButton buttonText="Learn More" />
                           </div>
                        </div>
                     </div>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   );
};

export default PaytmMoney;
