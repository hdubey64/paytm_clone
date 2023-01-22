import React from "react";
import { Row, Col } from "reactstrap";
import DownloadButton from "../DownloadButton";
import "./Instrument.css";

const Instrument = ({
   title = "",
   title2 = "",
   saySomthing = "Give a me Para",
   img = "",
   tagLine = "Give Your Punch Line",
   banner = "",
   tagLine2 = "",
   width = "80px",
   cardButton = <DownloadButton />,
}) => {
   return (
      <div className=" content">
         <Row>
            <Col md={12} lg={6} className="m-auto">
               <div className="center-card">
                  <div className="logoTag">
                     <img
                        src={img}
                        className="card-img-center"
                        style={{ width }}
                        alt="...."
                     />
                     <h6>
                        <text>
                           <br />
                           {title}
                           <br />
                           {title2}
                           <br />
                        </text>
                     </h6>
                  </div>

                  <h1>{tagLine}</h1>
                  <p>{saySomthing}</p>
                  <div className="downloadBtn">{cardButton}</div>
               </div>
            </Col>
            <Col md={12} lg={6} className="m-auto">
               <div className="banner">
                  <img src={banner} alt="" />
               </div>
            </Col>
         </Row>
      </div>
   );
};
export default Instrument;
