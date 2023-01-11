import React from "react";
import { Container, Row, Col } from "reactstrap";
import ToolsCard from "../../Components/ToolsCard";
import "./style.css";

const BusinessTools = () => {
   return (
      <div>
         <Container className="businessToolsSection">
            <div className="businessToolContent m-auto text-cent">
               <h1 className="businessToolsTag">
                  <text>
                     {" "}
                     <br />
                     Business Tools to help <br /> your business grow <br />{" "}
                  </text>
               </h1>
               <div className="businessToolsInnerContent mt-5">
                  <Row>
                     <Col md-4 m-auto>
                        <ToolsCard
                           pic="	https://assetscdn1.paytm.com/images/catalog/view_item/854033/1626081565192.png"
                           picWidth="240px"
                           picHeight="220px"
                           h3Line1="POS Billing"
                           h3Line2="Software"
                           cardPara="Say Hello to Smart Retail Business Management"
                           linkText="Learn More"
                        />
                     </Col>
                     <Col md-4 m-auto>
                        <ToolsCard
                           pic="	https://assetscdn1.paytm.com/images/catalog/view_item/854035/1626081071077.png"
                           picWidth="240px"
                           picHeight="220px"
                           h3Line1="Paytm for"
                           h3Line2="Business App"
                           cardPara="Everything you need to manage your business on your phone"
                           linkText="Learn More"
                        />
                     </Col>
                     <Col md-4 m-auto>
                        <ToolsCard
                           pic="	https://assetscdn1.paytm.com/images/catalog/view_item/854036/1656568216166.png"
                           picWidth="240px"
                           picHeight="220px"
                           h3Line1="Advertise on"
                           h3Line2="Paytm"
                           cardPara="Grow your business by advertising on India’s largest mobile business"
                           linkText="Learn More"
                        />
                     </Col>
                     <Col md-4 m-auto>
                        <ToolsCard
                           pic="	https://assetscdn1.paytm.com/images/catalog/view_item/854038/1626081814411.png"
                           picWidth="240px"
                           picHeight="220px"
                           h3Line1="Business"
                           h3Line2="Khata"
                           cardPara="Managing Khata made easy"
                           linkText="Learn More"
                        />
                     </Col>
                  </Row>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default BusinessTools;
