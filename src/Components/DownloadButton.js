import React, { useState } from "react";
import { Button } from "reactstrap";
import "./DownloadButton.css";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const DownloadButton = () => {
   return (
      <Button className="download py-2 fs-6 fw-bold px-4">
         Download the App
         <FaApple className="ms-2" />
         <FaGooglePlay className="ms-2" />
      </Button>
   );
};

export default DownloadButton;
