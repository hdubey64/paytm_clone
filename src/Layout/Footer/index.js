import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Container, Row, Col } from "reactstrap";
import FooterAccordion from "../../Components/FooterAccordion";
import "./style.css";

const Footer = () => {
   return (
      <div>
         <div className="footerSection">
            <Container>
               <div className="footerContent">
                  <div className="footerInnerContent">
                     <Row>
                        <Col md={12} lg={3}>
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
                           </div>
                        </Col>
                        <Col md={12} lg={6}>
                           <div className="headIcon">
                              <img
                                 src="	https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/downloadApple.svg"
                                 alt=""
                              />
                              <img
                                 src="		https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/downloadGoogle.svg"
                                 alt=""
                              />
                           </div>
                        </Col>
                        <Col md={12} lg={3}>
                           <div className="headSocial">
                              <div>
                                 <FaTwitter />
                              </div>
                              <div>
                                 <FaInstagram />
                              </div>

                              <div>
                                 <FaFacebookF />
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </div>
                  <hr className="mt-5 pt-5" />
                  <div className="footerInnerContent">
                     <FooterAccordion />
                  </div>
               </div>
            </Container>
         </div>
         <div className=" blue"></div>
         <div className="darkBlue"></div>
      </div>
   );
};

export default Footer;
