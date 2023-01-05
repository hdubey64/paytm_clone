import React from "react";
import "./Card.css";

const Card = ({
   buttonText = "My Button",
   img = "",
   className = "lightBlue",
}) => {
   return (
      <div
         className={`${className} card cardColor m-auto`}
         style={{ width: " 166px", height: "186px" }}
      >
         <img
            src={img}
            className="card-img-top m-2"
            style={{ width: 64, height: 64 }}
            alt=""
         />
         <div className="card-body pe-5">
            <a href="#" className={`${className} cardBtn`}>
               {buttonText}
            </a>
         </div>
      </div>
   );
};

export default Card;
