import React from "react";
import { Container } from "react-bootstrap";
import LearnMoreButton from "../../Components/Button/Button";
import "./style.css";

const PaytmMoney = () => {
   return (
      <div className="paytmMoneySection">
         <Container>
            <div className="paytmMoneyContent">
               <div className="paytmMoneyInnerContent">
                  <img
                     src="https://assetscdn1.paytm.com/images/catalog/view_item/788781/1626077377376.png"
                     alt=""
                     width={472}
                  />
               </div>
               <div className="paytmMoneyInnerContent">
                  <div className="ps-5">
                     <img
                        src="https://assetscdn1.paytm.com/images/catalog/view/308774/1617696247991.png
                  "
                        alt=""
                        width={145}
                     />
                  </div>

                  <h1 className="mt-5 ps-5">
                     Build Long-term Wealth & Achieve your Goals.
                  </h1>
                  <p className="py-3 ps-5">
                     Investing on Paytm Money is transparent, low-cost and
                     commission-free. Buy stocks & mutual funds that can help
                     you create wealth & realise your dreams.
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

export default PaytmMoney;
