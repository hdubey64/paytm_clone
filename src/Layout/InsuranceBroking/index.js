import React from "react";
import { Container, Row, Col } from "reactstrap";
import LearnMoreButton from "../../Components/Button/Button";
import "./style.css";

const insurance = () => {
   return (
      <div className="insuranceSection">
         <Container>
            <Row>
               <Col md={12} lg={6}>
                  <div className="insuranceColContent">
                     <div className="insuranceInnerContent insuranceMade">
                        <img
                           src="	https://assetscdn1.paytm.com/images/catalog/view/308775/1653901470333.jpeg"
                           alt=""
                           width={171}
                        />
                        <h1>Insurance made easy.</h1>
                        <p>
                           Buying insurance does not have to be tedious,
                           time-consuming & confusing. Paytm Insurance removes
                           the worry of getting insured by making it simple,
                           convenient & easy-to-understand.
                        </p>
                        <div className="paytmMoneyButton">
                           <LearnMoreButton buttonText="Learn More" />
                        </div>
                     </div>
                  </div>
               </Col>
               <Col md={12} lg={6} className="m-auto">
                  <div className="insuranceColContent">
                     <div className="insuranceInnerContent bannerinsurance">
                        <img
                           src="https://assetscdn1.paytm.com/images/catalog/view_item/788790/1653913927257.png
                        "
                           alt=""
                        />
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default insurance;
