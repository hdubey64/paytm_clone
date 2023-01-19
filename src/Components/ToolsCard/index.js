import React from "react";
import { Container } from "reactstrap";
import { FaAngleRight } from "react-icons/fa";
import "./style.css";

const ToolsCard = ({
   pic = "",
   h3Line1 = "",
   h3Line2 = "",
   cardPara = "",
   linkText = "",
}) => {
   return (
      <div className=" toolsCard">
         <Container>
            <div className="toolsCardContent">
               <img src={pic} alt="" />

               <h3 className="toolsCardTag">{h3Line1}</h3>
               <h3 className="toolsCardTag">{h3Line2}</h3>
               <p>{cardPara}</p>
               <a href="#">{linkText} </a>
            </div>
         </Container>
      </div>
   );
};

export default ToolsCard;
