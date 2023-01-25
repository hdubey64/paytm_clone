import React from "react";
import { Container, Row, Col } from "reactstrap";
import LearnMoreButton from "../../Components/Button/Button";

import "./style.css";

const FinancialSection = () => {
   return (
      <div>
         <Container>
            <div className="financialSection">
               <h1 className="mb-5">Financial Services by Paytm</h1>
               <div className="financialContent">
                  <Row>
                     <Col md={12} lg={6}>
                        <div className="financialColContent">
                           <div className="financialInnerContent">
                              <img
                                 src="	https://assetscdn1.paytm.com/images/catalog/view/307193/1617696576778.png"
                                 alt=""
                                 width={212}
                                 className="paymentBank"
                              />
                              <h1>India's most sincere bank.</h1>
                              <p>
                                 Paytm Payments Bank offers secure, transparent
                                 and risk-free banking at your fingertips. With
                                 instant account opening, virtual debit card and
                                 zero balance requirements, experience the
                                 future of banking today.
                              </p>
                              <div className="paytmMoneyButton my-5">
                                 <LearnMoreButton buttonText="Lern More" />
                              </div>
                           </div>
                        </div>
                     </Col>
                     <Col md={12} lg={6}>
                        <div className="financialInnerContent bannerFinancialContent">
                           <img
                              src="https://assetscdn1.paytm.com/images/catalog/view_item/728826/1626076427497.png"
                              alt=""
                           />
                        </div>
                     </Col>
                  </Row>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default FinancialSection;
