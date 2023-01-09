import React from "react";
import { Container } from "reactstrap";
import LearnMoreButton from "../../Components/Button/Button";
import "./style.css";

const InsuranceBroking = () => {
   return (
      <div>
         <Container>
            <div className="insuranceBrokingSection mt-3">
               <div className="insuranceBrokingContent">
                  <div className="insuranceBrokingInnerContent">
                     <img
                        src="	https://assetscdn1.paytm.com/images/catalog/view/308775/1653901470333.jpeg"
                        alt=""
                        width={171}
                     />
                     <h1>Insurance made easy.</h1>
                     <p>
                        Buying insurance does not have to be tedious,
                        time-consuming & confusing. Paytm Insurance removes the
                        worry of getting insured by making it simple, convenient
                        & easy-to-understand.
                     </p>
                     <LearnMoreButton />
                  </div>
                  <div className="insuranceBrokingInnerContent">
                     <img
                        src="https://assetscdn1.paytm.com/images/catalog/view_item/788790/1653913927257.png
                        "
                        alt=""
                        width={452}
                     />
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default InsuranceBroking;
