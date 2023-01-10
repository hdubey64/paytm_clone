import React from "react";
import { Container, Row, Col } from "reactstrap";
import ToolsCard from "../../Components/ToolsCard";
import "./style.css";

const BusinessTools = () => {
   return (
      <div>
         <Container className="businessToolsSection">
            <div className="businessToolContent">
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
                        <ToolsCard />
                     </Col>
                     <Col md-4 m-auto>
                        <ToolsCard />
                     </Col>
                     <Col md-4 m-auto>
                        <ToolsCard />
                     </Col>
                     <Col md-4 m-auto>
                        <ToolsCard />
                     </Col>
                  </Row>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default BusinessTools;
