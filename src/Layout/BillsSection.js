import React from "react";
import { Container } from "reactstrap";
import Card from "../Components/Card";
import "./BillsSection.css";

const BillsSection = () => {
   return (
      <div className="bills">
         <Container>
            <h1>Reacharge & pay Bills On Paytm</h1>
            <div className="billsCard">
               <Card
                  buttonText="Recharge Prepaid Mobile >"
                  img="https://assetscdn1.paytm.com/images/catalog/view_item/733299/1626251017535.png"
               />
               <Card
                  buttonText="Pay
                  Electricity
                  Bill >"
                  img="https://assetscdn1.paytm.com/images/catalog/view_item/733308/1626251043534.png"
               />
               <Card
                  buttonText="Recharge DTH Conection >"
                  img="	https://assetscdn1.paytm.com/images/catalog/view_item/733311/1626251101045.png"
               />
               <Card
                  buttonText="Book
                  Gas
                  Cylinder >"
                  img="	https://assetscdn1.paytm.com/images/catalog/view_item/733307/1626251127863.png"
               />
               <Card
                  buttonText="                 
                  All
                  Payment
                  Servicese >"
                  img="https://assetscdn1.paytm.com/images/catalog/view_item/757701/1626268580682.png"
               />
            </div>
         </Container>
      </div>
   );
};

export default BillsSection;
