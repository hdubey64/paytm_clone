import React from "react";
import { Container, Row, Col } from "reactstrap";
import ToolsCard from "../../Components/ToolsCard";
import "./style.css";

const toolsCardData = [
   {
      pic: "	https://assetscdn1.paytm.com/images/catalog/view_item/854033/1626081565192.png",
      toolsTag: {
         lineOne: "POS Billing",
         lineTwo: "Software",
      },
      cardPara: "Say Hello to Smart Retail Business Management",
      linkText: "Learn More",
   },
   {
      pic: "	https://assetscdn1.paytm.com/images/catalog/view_item/854035/1626081071077.png",
      toolsTag: {
         lineOne: "Paytm for",
         lineTwo: "Business App",
      },
      cardPara: "Everything you need to manage your business on your phone",
      linkText: "Learn More",
   },
   {
      pic: "	https://assetscdn1.paytm.com/images/catalog/view_item/854036/1656568216166.png",
      toolsTag: {
         lineOne: "Advertise on",
         lineTwo: "Paytm",
      },
      cardPara:
         "Grow your business by advertising on India’s largest mobile business",
      linkText: "Learn More",
   },
   {
      pic: "	https://assetscdn1.paytm.com/images/catalog/view_item/854038/1626081814411.png",
      toolsTag: {
         lineOne: "Business",
         lineTwo: "Khata",
      },
      cardPara: "Managing Khata made easy",
      linkText: "Learn More",
   },
];

const BusinessTools = () => {
   return (
      <div className="businessToolsSection">
         <Container>
            <div className="businessToolContent">
               <h1 className="businessToolsTag">
                  <text>
                     {" "}
                     <br />
                     Business Tools to help <br /> your business grow <br />{" "}
                  </text>
               </h1>
            </div>
            <div className="businessToolsInnerContent">
               {toolsCardData.map((item) => (
                  <ToolsCard
                     key={item.pic}
                     pic={item.pic}
                     toolsTag={item.toolsTag}
                     cardPara={item.cardPara}
                     linkText={item.linkText}
                  />
               ))}
            </div>
         </Container>
      </div>
   );
};

export default BusinessTools;
