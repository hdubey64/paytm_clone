import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Row, Col } from "reactstrap";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import "./style.css";
import AccordianTitle from "../AccordianTitle";

const Accordion = styled((props) => (
   <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({}));

const AccordionSummary = styled((props) => (
   <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
   />
))(({ theme }) => ({
   backgroundColor:
      theme.palette.mode === "dark" ? "rgba(245, 255, 255, .05)" : "#f5f7fa",
   flexDirection: "row-reverse",
   "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
   },
   "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
   },
   "& .MuiPaper-root-MuiAccordion-root:before": {
      border: "none",
      backgroundColor: "transparent",
   },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
   padding: theme.spacing(2),
   border: "none",
   backgroundColor: "#f5f7fa",
}));

const FooterAccordions = () => {
   const [expanded, setExpanded] = React.useState("panel1");
   const [childExpend, setChildExpend] = React.useState("panel3");

   const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
   };
   const handleChild = (panel) => (event, newExpanded) => {
      setChildExpend(newExpanded ? panel : false);
   };

   return (
      <div>
         <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
         >
            <AccordionSummary
               aria-controls="panel1d-content"
               id="panel1d-header"
            >
               <AccordianTitle>Investor Relations</AccordianTitle>
            </AccordionSummary>
            <AccordionDetails>
               <div>
                  <Row>
                     <Col xs={6} className="invester text-start">
                        <a href="#">Home</a>
                        <a href="#">Franchaise</a>{" "}
                        <a href="#">Filings & Press Releases</a>
                     </Col>
                     <Col xs={6} className="invester">
                        <a href="#">News & Event</a>{" "}
                        <a href="#">Corporate Governance</a>
                        <a href="#">Resources</a>{" "}
                     </Col>
                  </Row>
               </div>
            </AccordionDetails>
         </Accordion>
         <Accordion
            expanded={expanded === "panel2" || expanded === "panel3"}
            onChange={handleChange("panel2")}
         >
            <AccordionSummary
               aria-controls="panel2d-content"
               id="panel2d-header"
            >
               <AccordianTitle>More About Paytm</AccordianTitle>
            </AccordionSummary>
            <AccordionDetails>
               <div className=" innerContent moreAbout">
                  <h6>
                     Paytm - India's Most Popular Platform for Money Transfer,
                     BHIM UPI Payments, Recharges and other online payments
                  </h6>
                  <p className="pt-2">
                     Paytm - India’s largest mobile e-commerce website is an
                     ultimate destination for prompt{" "}
                     <a href="#">Online Recharge</a> , DTH, Data Card & Metro
                     Card Recharge and Mobile Bill Payment for Airtel, Aircel,
                     BSNL, Idea, MTNL, Vodafone & other operators for all the
                     circles across India. Enjoy our online recharge and bill
                     payment service along with best bonus packs of internet &
                     roaming within a jiffy.
                  </p>
                  <p>
                     Now you don’t have to look at various websites to find the
                     best entertainment option in your city. You can book movie
                     tickets, event tickets and travel tickets within minutes on
                     Paytm.com. Paytm login is very easy on the{" "}
                     <a href="#">Paytm app</a> and Paytm website. Just enter
                     your number and Password/OTP to login and process all the
                     transactions instantly on Paytm.
                  </p>
               </div>
               <Accordion
                  expanded={childExpend === "panel3"}
                  onChange={handleChild("panel3")}
               >
                  <AccordionSummary
                     aria-controls="panel3d-content"
                     id="panel3d-header"
                  >
                     <AccordianTitle>Frequently Asked Questions</AccordianTitle>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className="askedContent">
                        <h6>What is Paytm?</h6>
                        <p>
                           Paytm stands for Pay through mobile and it is India’s
                           largest mobile payments and commerce platform. It
                           lets you transfer money instantly to anyone at zero
                           cost using the Paytm Wallet. You can make cashless
                           transactions at several places like taxi and autos,
                           petrol pumps, grocery shops, restaurants, coffee
                           shops, multiplexes, and many more. You can also use
                           Paytm to pay for online recharges, utility bill
                           payments, book movie or travel tickets among other
                           things on the Paytm app or website
                        </p>
                     </div>
                     <div className="askedContent">
                        <h6>How to use Paytm?</h6>
                        <ol>
                           <li>Open your Paytm app</li>
                           <li>Tap on ‘Create A New Account’</li>
                           <li>
                              Enter your mobile that you want to use for Paytm,
                              email address and a password
                           </li>
                           <li>Tap on ‘Create a New Account’</li>
                           <li>
                              Enter the OTP that you will receive on your mobile
                              number and click on ‘Submit’
                           </li>
                           <li>Enter your First Name, Last Name and DOB</li>
                           <li>Click on ‘Create Account’</li>
                           <li>Your account has been created</li>
                        </ol>
                     </div>
                     <div className="askedContent">
                        <h6>How to use Paytm?</h6>
                        <p>
                           You can use Paytm for many different things such as
                           online recharge, shopping, pay fees, bills and a lot
                           more thing. You will need to at least one of your
                           bank account to your Paytm account and then you can
                           enjoy India’s fastest online transactions and payment
                           service.
                        </p>
                     </div>
                  </AccordionDetails>
               </Accordion>
               <div className="innerContent ">
                  <div className="questionContent">
                     <Row>
                        <Col sm={12} md={12} lg={4}>
                           <div className="askedColContent">
                              <img
                                 src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/help.svg"
                                 alt=""
                                 width={80}
                                 height={81}
                              />
                              <p>
                                 <span>24X7 Help </span>
                                 If we fall short of your expectations in any
                                 way, let us know.
                              </p>
                           </div>
                        </Col>
                        <Col sm={12} md={12} lg={4}>
                           <div className="askedColContent">
                              <img
                                 src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/assurance.svg"
                                 alt=""
                                 width={80}
                                 height={81}
                              />
                              <p>
                                 <span>100% Assurance </span>
                                 If you face any issue, your money is
                                 immediately refunded. Sit back shop on.
                              </p>
                           </div>
                        </Col>

                        <Col sm={12} md={12} lg={4}>
                           <div className="askedColContent">
                              <img
                                 src="	https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/trust.svg"
                                 alt=""
                                 width={80}
                                 height={81}
                              />
                              <p>
                                 <span>Paytm Trust </span>
                                 Your moneaskedC is yours. All refunds come with
                                 no question asked guarantee.
                              </p>
                           </div>
                        </Col>
                     </Row>
                  </div>
                  <div className="questionContentt pt-3">
                     <Row>
                        <Col md={12} lg={8}>
                           <div className="aboutColContent">
                              <a href="">About us</a>
                              <a href="">24x7 Help</a>
                              <a href="">Partner with us</a>
                              <a href="">Grievance policy</a>
                              <a href="">Blog </a>
                              <a href="">Bug bounty</a>
                              <a href="">Privacy</a>
                              <a href="">Terms & Conditions</a>
                           </div>
                        </Col>
                        <Col md={12} lg={4}>
                           <Row>
                              <Col xs={6}>
                                 <div className="businessColContent">
                                    <h6>Become a Seller & Earn</h6>
                                 </div>
                              </Col>
                              <Col xs={6}>
                                 <div className="businessColContent">
                                    <h6>Paytm for Business</h6>
                                 </div>
                              </Col>
                           </Row>
                        </Col>
                     </Row>
                  </div>
                  <div className="questionFooter">
                     <div className="questionFooterInnerContent pt-5 pe-3">
                        <h6>Be Safe. Be Vigilant</h6>
                        <p>
                           Please do not share your Paytm Wallet password,
                           Credit/Debit card pin, other confidential information
                           with anyone even if he/she claims to be from Paytm.
                           We advise our customers to completely ignore such
                           communications & report to us at
                           cybercell@paytmbank.com
                        </p>
                     </div>

                     <div className="questionFooterInnerContent pt-5 px-3">
                        <h6>Disclaimers</h6>
                        <p>
                           Paytm Wallet is issued by Paytm Payments Bank Limited
                        </p>
                        <p>
                           Cashback is 'Paytm wallet loyalty cashback' given by
                           'Pay with Paytm' payment platform. It can be used to
                           pay for goods & services sold by merchants that
                           accept 'Pay with Paytm'
                        </p>
                     </div>

                     <div className="questionFooterInnerContent pt-5 ps-3">
                        <h6>Bank Grade Security with</h6>
                        <div className="footerPic pt-4 ">
                           <img
                              src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/americanExpress.png"
                              alt=""
                              width={99}
                              height={25}
                           />
                           <img
                              src="	https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/dinerClub.svg"
                              alt=""
                              width={27}
                              height={25}
                           />
                           <img
                              src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/pci.svg"
                              alt=""
                              width={61}
                              height={25}
                           />
                        </div>
                        <div className="footerPic pt-4">
                           <img
                              src="	https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/visa.svg"
                              alt=""
                              width={56}
                              height={25}
                           />
                           <img
                              src="		https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/ruPay.svg"
                              alt=""
                              width={94}
                              height={25}
                           />
                           <img
                              src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/mastercard.svg"
                              alt=""
                              width={72}
                              height={25}
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </AccordionDetails>
         </Accordion>
         <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
         >
            <AccordionSummary
               aria-controls="panel4d-content"
               id="panel4d-header"
            >
               <AccordianTitle>Company</AccordianTitle>
            </AccordionSummary>
            <AccordionDetails>
               <div className="innorContent invester ps-4 pe-5 me-5">
                  <a href="#">About US </a>
                  <a href="#">CSR</a> <a href="#">Blog</a>
                  <a href="#">Contact Us </a> <a href="#">Terms & Conditions</a>
                  <a href="#">Sustainability</a>{" "}
               </div>
            </AccordionDetails>
         </Accordion>
         <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
         >
            <AccordionSummary
               aria-controls="panel4d-content"
               id="panel4d-header"
            >
               <AccordianTitle>Recharge & pay bills</AccordianTitle>
            </AccordionSummary>
            <AccordionDetails>
               <div className="invester">
                  <div className="rechargeContent ">
                     <a href="#">Mobile Recharge </a>
                     <a href="#">Mobile Bill Payment</a>{" "}
                     <a href="#">Datacard Recharge</a>
                  </div>
                  <div className="rechargeContent ">
                     <a href="#">Datacard Bill Payment </a>{" "}
                     <a href="#">Dth Recharge</a>
                     <a href="#">Electricity Bill Payment</a>{" "}
                  </div>
                  <div className="rechargeContent ">
                     <a href="#">Landline Bill Payment </a>
                     <a href="#">Broadband Bill Payment</a>{" "}
                     <a href="#">Gas Bill Payment</a>
                  </div>

                  <div className="rechargeContent ">
                     <a href="#">Water Bill Payment </a>{" "}
                     <a href="#">Metro Card Recharge</a>
                     <a href="#">Municipal Recharge </a>{" "}
                  </div>

                  <div className="rechargeContent  ">
                     <a href="#">Toll Recharge </a>
                     <a href="#">Credit Bill Payment</a>{" "}
                     <a href="#">Cabletv Recharge</a>
                  </div>
                  <div className="rechargeContent  ">
                     <a href="#">Devotion Rental </a>{" "}
                     <a href="#">Bill Payment</a>
                     <a href="#">Fastag Recharge</a>{" "}
                  </div>
               </div>
            </AccordionDetails>
         </Accordion>
         <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
         >
            <AccordionSummary
               aria-controls="panel6d-content"
               id="panel6d-header"
            >
               <AccordianTitle>
                  Pay Loan EMI, Insurance Premiums & Education Fee plus
               </AccordianTitle>
            </AccordionSummary>
            <AccordionDetails>
               <div className="innorContent invester ps-4 pe-5 me-5">
                  <a href="#">Pay Loan EMI</a>
                  <a href="#">Pay Insurance Premium</a>{" "}
               </div>
            </AccordionDetails>
         </Accordion>
         <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
         >
            <AccordionSummary
               aria-controls="panel7d-content"
               id="panel7d-header"
            >
               <AccordianTitle>Book Travel & Entertainment</AccordianTitle>
            </AccordionSummary>
            <AccordionDetails>
               <div className="innorContent invester ps-4">
                  <a href="#">Movie Ticket Booking</a>{" "}
                  <a href="#">Bus Ticket Booking</a>
                  <a href="#">Flight Tickets Booking</a>{" "}
                  <a href="#">Train Ticket Booking</a>{" "}
                  <a href="#">Events Booking</a>
                  <a href="#">Upcoming Movies</a>
                  <a href="#">Trains Sitemap</a>
                  <a href="#">Bus Sitemap</a>
               </div>
            </AccordionDetails>
         </Accordion>
         <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
         >
            <AccordionSummary
               aria-controls="panel8d-content"
               id="panel8d-header"
            >
               <AccordianTitle>Investments & Miscellaneous</AccordianTitle>
            </AccordionSummary>
            <AccordionDetails>
               <div className="innorContent invester ps-4">
                  <a href="#">Mutual Fund Investments</a>{" "}
                  <a href="#">Miscellaneous</a>
               </div>
            </AccordionDetails>
         </Accordion>
         <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
         >
            <AccordionSummary
               aria-controls="panel9d-content"
               id="panel9d-header"
            >
               <AccordianTitle>
                  Insurance (Powered by Paytm Insurance Broking Private Limited)
               </AccordianTitle>
            </AccordionSummary>
            <AccordionDetails>
               <div className="innorContent invester ps-4">
                  <a href="#">Car Insurance</a>
                  <a href="#">Two Wheeler Insurance</a>
                  <a href="#">Health Insurance</a>
                  <a href="#">Life Insurance</a>
                  <a href="#">Term Insurance</a>
               </div>
            </AccordionDetails>
         </Accordion>
         <Accordion
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
         >
            <AccordionSummary
               aria-controls="panel10d-content"
               id="panel10d-header"
            >
               <AccordianTitle>Loans and Credit Cards</AccordianTitle>
            </AccordionSummary>
            <AccordionDetails>
               <div className="innorContent invester ps-4">
                  <a href="#">Postpaid</a>
                  <a href="#">Credit Card</a>
                  <a href="#">Personal Loan</a>
                  <a href="#">Credit Report</a>
               </div>
            </AccordionDetails>
         </Accordion>
         <Accordion
            expanded={expanded === "panel11"}
            onChange={handleChange("panel11")}
         >
            <AccordionSummary
               aria-controls="panel11d-content"
               id="panel11d-header"
            >
               <AccordianTitle>Financial Tools & Calculators</AccordianTitle>
            </AccordionSummary>
            <AccordionDetails>
               <div className="innorContent invester ps-4">
                  <a href="#">EMI Calculator</a>
                  <a href="#">Personal Loan EMI Calculator</a>
                  <a href="#">Home Loan EMI Calculator</a>
                  <a href="#">Car Loan EMI Calculator</a>
                  <a href="#">IFSC Code Finder</a>
                  <a href="#">Financial Tools & Calculators</a>
                  <a href="#">Currency Converter</a>
               </div>
            </AccordionDetails>
         </Accordion>
      </div>
   );
};

export default FooterAccordions;
