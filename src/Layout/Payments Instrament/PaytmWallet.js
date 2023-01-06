import React from "react";
import { Container, Col, Row } from "reactstrap";
import "./PaytmWallet.css";
import Logo from "./Assets/Images/Wallet_logo.png";
import DownloadButton from "../../Components/DownloadButton";
const PaytmWallet = () => {
   return (
      <div className="walletSection">
         <Container>
            <h1 className="walletTag">Paytm Payment Instruments</h1>
            <div className="walletContant">
               <Row>
                  <Col className="md-6 pt-5 innerContant">
                     <div className="walletLogo">
                        <img src={Logo} alt="" width={80} />
                        <div>
                           <h6 className="paytm">
                              <text>
                                 <br />
                                 Paytm
                                 <br />
                                 Wallet
                                 <br />
                              </text>
                           </h6>
                        </div>
                     </div>
                     <div>
                        <h2 className="mt-5">
                           The Fastest Way to Pay In-store & Online.
                        </h2>
                        <p className=" mt-2 fs-5 fw-bold">
                           Load up your Paytm Wallet for free and make payments
                           in a jiffy at over 21 million stores, websites and
                           apps.
                        </p>
                        <DownloadButton />
                     </div>
                  </Col>
                  <Col className="md-6 pt-5">
                     <div className="me-0 walletBanner text-start">
                        <img
                           src="https://assetscdn1.paytm.com/images/catalog/view_item/728701/1618577020961.png"
                           alt=""
                           width={528}
                        />
                     </div>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   );
};

export default PaytmWallet;
