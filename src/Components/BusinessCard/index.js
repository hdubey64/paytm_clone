import React from "react";
import { Row, Col } from "reactstrap";
import DownloadButton from "../DownloadButton";
import "./style.css";

const BusinessCard = ({
   saySomthing = "Give a me Para",
   tagLine = "Give Your Punch Line",
   banner = "",
   cardButton = <DownloadButton />,
   bannerHight = "",
   bannerWidth = "",
   bannerClass = "",
}) => {
   return (
      <div
         className="card businessContent mt-5 m-auto"
         style={{ width: " 92%", height: "100%" }}
      >
         <Row>
            <Col md-6 className="me-5 m-auto">
               <div className="businessInnerContent">
                  <h1 className="card-title me-5 mb-4 ">{tagLine}</h1>
                  <p className="card-text mb-5 me-5">{saySomthing}</p>
                  <div>{cardButton}</div>
               </div>
            </Col>
            <Col md-6 className="ms-5 bannerStyle">
               <div>
                  <img
                     src={banner}
                     style={{ width: bannerWidth, height: bannerHight }}
                     alt=""
                  />
               </div>
            </Col>
         </Row>
      </div>
   );
};
export default BusinessCard;
