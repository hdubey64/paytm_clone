import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LearnMoreButton from "../../Components/Button/Button";
import "./style.css";

const PersonalLoan = () => {
   return (
      <div className="PersonalLoanSection">
         <Container>
            <Row>
               <Col md={12} lg={6}>
                  <div className="PersonalLoanContent">
                     <div className="PersonalLoanInnerContent bannerPersonalLoan">
                        <img
                           src="https://assetscdn1.paytm.com/images/catalog/view_item/850765/1655987252365.png"
                           alt=""
                           width={433}
                        />
                     </div>
                  </div>
               </Col>
               <Col md={12} lg={6}>
                  <div className="PersonalLoanContent">
                     <div className="PersonalLoanInnerContent getLoan">
                        <img
                           src="	https://assetscdn1.paytm.com/images/catalog/view/308777/1617695287770.png "
                           alt=""
                           width={176}
                        />

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
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default PersonalLoan;
