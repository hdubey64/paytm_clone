import React from "react";
import "./Card.css";

const Card = ({
   buttonText = { lineOne: "", lineTwo: "", lineThree: "" },
   img = "",
   className = "lightBlue",
   btnClassName = "",
}) => {
   return (
      <div className={`${className} card cardColor`}>
         <div className="imgAlign">
            <img
               src={img}
               className="card-img-top"
               style={{ width: 64, height: 64 }}
               alt=""
            />
         </div>

         <div className="card-body cardLink ">
            <a href="#" className={`${btnClassName} cardBtn`}>
               {buttonText.lineOne}
            </a>
            <a href="#" className={`${btnClassName} cardBtn`}>
               {buttonText.lineTwo}
            </a>
            <a href="#" className={`${btnClassName} cardBtn`}>
               {buttonText.lineThree}
            </a>
         </div>
      </div>
   );
};

export default Card;
