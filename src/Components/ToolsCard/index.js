import React from "react";
import { Container } from "reactstrap";
import { FaAngleRight } from "react-icons/fa";
import "./style.css";

const ToolsCard = ({
   pic = "",
   picWidth = "",
   picHeight = "",
   h3Line1 = "",
   h3Line2 = "",
   cardPara = "",
   linkText = "",
}) => {
   return (
      <div className=" toolsCard m-auto">
         <Container>
            <div className="toolsCardContent">
               <img src={pic} alt="" width={picWidth} height={picHeight} />

               <h3 className="toolsCardTag mb-4">
                  <text>
                     <br /> {h3Line1} <br /> {h3Line2} <br />
                  </text>
               </h3>
               <p>{cardPara}</p>
               <a href="#">{linkText} </a>
            </div>
         </Container>
      </div>
   );
};

export default ToolsCard;
