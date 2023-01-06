import React from "react";
import { Row, Col } from "reactstrap";
import DownloadButton from "../DownloadButton";
import "./Instrument.css";

const Instrument = ({
   title = "Basketball",
   title2 = "",
   saySomthing = "Give a me Para",
   img = "",
   tagLine = "Give Your Punch Line",
   banner = "",
   tagLine2 = "",
}) => {
   return (
      <div
         className="card content mt-5 m-auto"
         style={{ width: " 92%", height: "100%" }}
      >
         <div className="center-card">
            <div className="logoTag">
               <img
                  src={img}
                  className="card-img-center"
                  style={{ width: "80px" }}
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
            <div className="watToPay">
               <h1 className="card-title mt-3  ">{tagLine}</h1>
               <p className="card-text">{saySomthing}</p>
               <DownloadButton />
            </div>
         </div>
         <div>
            <img
               src={banner}
               style={{ width: "539px", height: "460px" }}
               alt=""
            />
         </div>
      </div>
   );
};
export default Instrument;
