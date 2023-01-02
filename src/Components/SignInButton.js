import React, { useState } from "react";
import { Button } from "reactstrap";
import Profile from "../Assets/Imegas/ProfileSignIn.svg";
import "./SignInButton.css";

const SignInButton = () => {
   return (
      <Button className="vishal ms-5">
         Sign Up <img src={Profile} alt="" />
      </Button>
   );
};

export default SignInButton;
