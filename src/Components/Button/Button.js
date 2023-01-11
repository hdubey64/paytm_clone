import React from "react";
import "./Button.css";
import { FaAngleRight } from "react-icons/fa";
import { Button } from "reactstrap";

const LearnMoreButton = ({ buttonText = "My Button", className = "" }) => {
   return (
      <div className="learnMoreContent">
         <a href="#" className={`learnMoreInnerContent px-4 py-3 ${className}`}>
            {buttonText} <FaAngleRight className="ms-3" />
         </a>
      </div>
   );
};

export default LearnMoreButton;
