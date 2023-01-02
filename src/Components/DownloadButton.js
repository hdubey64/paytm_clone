import React, { useState } from "react";
import { Button } from "reactstrap";
import Profile from "../Assets/Imegas/ProfileSignIn.svg";
import "./DownloadButton.css";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const DownloadButton = () => {
   return (
      <Button className="download py-2 px-4">
         Download Paytm App
         <FaApple />
         <FaGooglePlay />
      </Button>
   );
};

export default DownloadButton;
