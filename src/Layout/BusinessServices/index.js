import React from "react";
import { Container } from "react-bootstrap";
import BusinessCard from "../../Components/BusinessCard/index";
import LearnMoreButton from "../../Components/Button/Button";

import "./style.css";

const businessCardData = [
   {
      tagLine: "Accept payments online with ease",
      saySomthing:
         "Grow your business with the payment gateway that powers India’s largest brands and even the Paytm App",
      banner:
         "https://assetscdn1.paytm.com/images/catalog/view_item/853877/1626077000254.png",
      bannerClass: "bannerSizeTwo",
   },
   {
      tagLine: "In-shop payments powered by Paytm.",
      saySomthing:
         "Millions of small & big businesses use Paytm to accept payments anywhere any time ,with a wide range of solutions for all kind of merchants",
      banner:
         "https://assetscdn1.paytm.com/images/catalog/view_item/853880/1656675942486.png",
      bannerClass: "bannerSizeOne",
   },
];

const BusinessServices = () => {
   return (
      <div className="businessServicesSection">
         <Container>
            <h1 className="businessServicesTag">Business Services by Paytm</h1>
            <div className="businessServiceContent">
               {businessCardData.map((item) => (
                  <BusinessCard
                     key={item.tagLine}
                     tagLine={item.tagLine}
                     saySomthing={item.saySomthing}
                     banner={item.banner}
                     bannerClass={item.bannerClass}
                  />
               ))}
            </div>
         </Container>
      </div>
   );
};

export default BusinessServices;
