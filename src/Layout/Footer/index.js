import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Container } from "reactstrap";
import FooterAccordion from "../../Components/FooterAccordeien";
import "./style.css";

const Footer = () => {
   return (
      <div>
         <div className="footerSection">
            <Container>
               <div className="footerContent">
                  <div className="footerInnerContent">
                     <div className="head">
                        <h1>
                           <text>
                              <br />
                              Download Paytm App
                              <br />
                              to Pay from anywhere
                              <br />
                           </text>
                        </h1>
                        <div className="headIcon">
                           <img
                              src="	https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/downloadApple.svg"
                              alt=""
                              className="ms-2"
                              width={160}
                              height={53}
                           />
                           <img
                              src="		https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/downloadGoogle.svg"
                              alt=""
                              className="ms-2"
                              width={179}
                              height={53}
                           />
                        </div>
                     </div>
                     <div className="headSocial">
                        <FaTwitter size={25} color="#707070" />
                        <FaInstagram size={25} color="#707070" />
                        <FaFacebookF size={25} color="#707070" />
                     </div>
                  </div>
                  <hr className="mt-5 pt-5" />
                  <FooterAccordion />
               </div>
            </Container>
         </div>
         <div className=" blue"></div>
         <div className="darkBlue"></div>
      </div>
   );
};

export default Footer;
