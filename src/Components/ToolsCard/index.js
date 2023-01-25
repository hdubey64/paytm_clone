import React from "react";
import { Container } from "reactstrap";
import "./style.css";

const ToolsCard = ({
   pic = "",
   toolsTag = { lineOne: "", lineTwo: "" },
   cardPara = "",
   linkText = "",
}) => {
   return (
      <div className=" toolsCard">
         <Container>
            <div className="toolsCardContent">
               <div className="toolsCardInnerContent">
                  <img src={pic} alt="" />
                  <h1 className="toolsCardTag">{toolsTag.lineOne}</h1>
                  <h1 className="toolsCardTag">{toolsTag.lineTwo}</h1>
                  <p>{cardPara}</p>
                  <a href="#">{linkText} </a>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default ToolsCard;
