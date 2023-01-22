import React from "react";
import { Container } from "reactstrap";
import "./PaytmWallet.css";
import Instrument from "../../Components/Payment Instrumnet/Instrument";
import LearnMoreButton from "../../Components/Button/Button";

const instrumentData = [
   {
      img: "	https://assetscdn1.paytm.com/images/catalog/view/307185/1617861564011.png",
      title: "Paytm",
      title2: "Wallet",
      tagLine: "The Fastest Way to Pay In-store & Online",
      h1Class: "watToPay",
      saySomthing:
         "Load up your Paytm Wallet for free and make payments in a jiffy at over 21 million stores, websites and apps.",
      banner:
         "https://assetscdn1.paytm.com/images/catalog/view_item/728701/1618577020961.png",
      bannerWidth: "539px",
      bannerHight: "460px",
   },
   {
      img: "	https://assetscdn1.paytm.com/images/catalog/view/307186/1615957674521.png",
      title: "UPI Money",
      title2: "Transfer",
      tagLine: "Pay anyone directly from your bank account.",
      tagLine2: "from your bank account.",
      h1Class: "watToPay",
      saySomthing:
         "Pay anyone, everywhere. Make contactless & secure payments in-stores or online using Paytm Wallet or Directly from your Bank Account. Plus, send & receive money from anyone.",
      banner:
         "	https://assetscdn1.paytm.com/images/catalog/view_item/728702/1626342071104.png",
      bannerWidth: "539px",
      bannerHight: "460",
   },
   {
      img: "	https://assetscdn1.paytm.com/images/catalog/view/307191/1613622537678.png",
      tagLine: "Want it ? No more waiting for it.",
      tagLine2: "from your bank account.",
      saySomthing:
         "With Paytm Postpaid, your wishlist doesn't have to be on the waitlist. Shop for the things you want today and pay for them next month.",
      banner:
         "	https://assetscdn1.paytm.com/images/catalog/view_item/850764/1626077030984.png",
      bannerWidth: "433px",
      bannerHight: "500px",
      width: "166px",
   },
];

const PaytmWallet = () => {
   return (
      <div className="walletSection">
         <Container>
            <h1 className="walletTag">Paytm Payment Instruments</h1>
            <div className="walletContent">
               {instrumentData.map((item) => (
                  <Instrument
                     key={item.img}
                     img={item.img}
                     title={item.title}
                     title2={item.title2}
                     tagLine={item.tagLine}
                     saySomthing={item.saySomthing}
                     banner={item.banner}
                     bannerWidth={item.bannerWidth}
                     bannerHight={item.bannerHight}
                  />
               ))}
            </div>
         </Container>
      </div>
   );
};

export default PaytmWallet;
