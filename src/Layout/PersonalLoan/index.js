import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LearnMoreButton from "../../Components/Button/Button";
import "./style.css";

const PersonalLoan = () => {
   return (
      <div className="PersonalLoanSection">
         <Container>
            <div className="PersonalLoanContent">
               <Row>
                  <Col md={12} lg={6}>
                     <div className="PersonalLoanInnerContent bannerPersonalLoan">
                        <img
                           src="https://assetscdn1.paytm.com/images/catalog/view_item/850765/1655987252365.png"
                           alt=""
                           width={433}
                        />
                     </div>
                  </Col>
                  <Col md={12} lg={6}>
                     <div className="PersonalLoanInnerContent">
                        <div>
                           <img
                              src="	https://assetscdn1.paytm.com/images/catalog/view/308777/1617695287770.png
                  "
                              alt=""
                              width={176}
                           />
                        </div>

                        <h1>Get a Personal Loan in 2 Minutes.</h1>
                        <p>
                           Paytm offers India's quickest multi-purpose,
                           hassle-free loan. It is 100% digital, transparent and
                           paperless.
                        </p>
                        <div>
                           <LearnMoreButton buttonText="Learn More" />
                        </div>
                     </div>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   );
};

export default PersonalLoan;
