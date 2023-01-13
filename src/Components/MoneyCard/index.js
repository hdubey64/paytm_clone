import React from "react";
import "./style.css";

const MoneyCard = ({
   img = "",
   imgWidth = "",
   imgHeight = "",
   tag = "",
   backgroudColor = "",
   paragraph = "",
   buttonText = "",
}) => {
   return (
      <div className={`m-3 moneyCardContent ${backgroudColor}  `}>
         <img src={img} alt="" width={imgWidth} height={imgHeight} />
         <h5 className=" m-3 text-center">{tag}</h5>
         <p>{paragraph}</p>
         <a href="#">{buttonText}</a>
      </div>
   );
};

export default MoneyCard;
