import React from "react";
import { Container } from "reactstrap";
import "./PaytmWallet.css";
import Instrument from "../../Components/Payment Instrumnet/Instrument";
import DownloadButton from "../../Components/DownloadButton";

const PaytmWallet = () => {
   return (
      <div className="walletSection">
         <Container>
            <h1 className="walletTag">Paytm Payment Instruments</h1>
            <Instrument
               img="	https://assetscdn1.paytm.com/images/catalog/view/307185/1617861564011.png"
               title="Paytm"
               title2="Wallet"
               tagLine="The Fastest Way to Pay In-store & Online"
               saySomthing="Load up your Paytm Wallet for free and make payments in a jiffy at over 21 million stores, websites and apps."
               banner="https://assetscdn1.paytm.com/images/catalog/view_item/728701/1618577020961.png
"
            />
            <Instrument
               img="	https://assetscdn1.paytm.com/images/catalog/view/307186/1615957674521.png"
               title="UPI Money"
               title2="Transfer"
               tagLine="Pay anyone directly"
               tagLine2="from your bank account."
               saySomthing="Pay anyone, everywhere. Make contactless & secure payments in-stores or online using Paytm Wallet or Directly from your Bank Account. Plus, send & receive money from anyone."
               banner="	https://assetscdn1.paytm.com/images/catalog/view_item/728702/1626342071104.png
"
            />
            <Instrument
               img="	https://assetscdn1.paytm.com/images/catalog/view/307186/1615957674521.png"
               title="UPI Money"
               title2="Transfer"
               tagLine="Pay anyone directly"
               tagLine2="from your bank account."
               saySomthing="Pay anyone, everywhere. Make contactless & secure payments in-stores or online using Paytm Wallet or Directly from your Bank Account. Plus, send & receive money from anyone."
               banner="	https://assetscdn1.paytm.com/images/catalog/view_item/728702/1626342071104.png
"
            />
         </Container>
      </div>
   );
};

export default PaytmWallet;
