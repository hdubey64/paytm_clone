import React, { useState } from "react";
import { Button } from "reactstrap";
import Profile from "../Assets/Imegas/ProfileSignIn.svg";
import "./SignInButton.css";

const SignInButton = () => {
   return (
      <Button className="vishal  ps-4 py-0 pe-0 text-center fw-bold ">
         Sign In <img src={Profile} alt="" className="ps-2 pe-0" />
      </Button>
   );
};

export default SignInButton;
