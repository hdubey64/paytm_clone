import React from "react";
import { Container } from "react-bootstrap";
import BusinessCard from "../../Components/BusinessCard/index";
import LearnMoreButton from "../../Components/Button/Button";

import "./style.css";

const BusinessServices = () => {
   return (
      <div className="businessServicesSection">
         <Container>
            <h1 className="businessServicesTag">Business Services by Paytm</h1>
            <BusinessCard
               tagLine="Accept payments online with ease"
               saySomthing="Grow your business with the payment gateway that powers India’s largest brands and even the Paytm App"
               cardButton={<LearnMoreButton buttonText="Learn More" />}
               banner="https://assetscdn1.paytm.com/images/catalog/view_item/853877/1626077000254.png"
               bannerWidth="433px"
               bannerHight="464px"
               bannerClass="bannerStyle"
            />
         </Container>
      </div>
   );
};

export default BusinessServices;
