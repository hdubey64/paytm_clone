import React from "react";
import "./style.css";

const MoneyCard = ({
   img = "",
   imgWidth = "",
   imgHeight = "",
   investTag = "",
   travelTag = "",
   backgroudColor = "",
   investParagraph = "",

   buttonText = "",
}) => {
   return (
      <div className={`m-3 moneyCardContent ${backgroudColor}  `}>
         <img src={img} alt="" width={imgWidth} height={imgHeight} />
         <h5 className=" m-3 text-center fw-bold">{investTag}</h5>
         <h5 className=" text-start fw-bold">{travelTag}</h5>
         <p className=" text-bottom">{investParagraph}</p>
         <a href="#">{buttonText}</a>
      </div>
   );
};

export default MoneyCard;
