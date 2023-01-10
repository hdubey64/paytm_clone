import React from "react";
import { Container } from "react-bootstrap";
import LearnMoreButton from "../../Components/Button/Button";
import "./style.css";

const PersonalLoan = () => {
   return (
      <div className="PersonalLoanSection">
         <Container>
            <div className="PersonalLoanContent">
               <div className="PersonalLoanInnerContent">
                  <img
                     src="https://assetscdn1.paytm.com/images/catalog/view_item/850765/1655987252365.png"
                     alt=""
                     width={433}
                  />
               </div>
               <div className="PersonalLoanInnerContent ps-5">
                  <div className="ps-5 pt-5">
                     <img
                        src="	https://assetscdn1.paytm.com/images/catalog/view/308777/1617695287770.png
                  "
                        alt=""
                        width={176}
                     />
                  </div>

                  <h1 className="mt-5 ps-5">
                     Get a Personal Loan in 2 Minutes.
                  </h1>
                  <p className="py-3 ps-5">
                     Paytm offers India's quickest multi-purpose, hassle-free
                     loan. It is 100% digital, transparent and paperless.
                  </p>
                  <div className="ps-5 pt-1">
                     <LearnMoreButton buttonText="Learn More" />
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default PersonalLoan;
