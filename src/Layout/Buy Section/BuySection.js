import React from "react";
import { Container } from "reactstrap";
import Card from "../../Components/Card";
import "./BuySection.css";

const BuySection = () => {
   return (
      <div className="buy">
         <Container>
            <h1>Book & Buy on Paytm.</h1>
            <div className="buyCard">
               <Card
                  buttonText="Movie Tickets  >"
                  img="	https://assetscdn1.paytm.com/images/catalog/view_item/733295/1626259710574.png"
                  className="darkBlue"
               />
               <Card
                  buttonText="Flight Tickets >"
                  img="https://assetscdn1.paytm.com/images/catalog/view_item/733296/1626259884425.png"
                  className="darkBlue"
               />
               <Card
                  buttonText="Bus Tickets >"
                  img="	https://assetscdn1.paytm.com/images/catalog/view_item/729996/1626260477699.png"
                  className="darkBlue"
               />
               <Card
                  buttonText="Train Tickets >"
                  img="	https://assetscdn1.paytm.com/images/catalog/view_item/729996/1626260477699.png"
                  className="darkBlue"
               />
               <Card
                  buttonText="                 
                 Buy Insurance >"
                  img="https://assetscdn1.paytm.com/images/catalog/view_item/729998/1666185237748.png"
                  className="darkBlue"
               />
               <Card
                  buttonText="                 
                  International Flights >"
                  img="	https://assetscdn1.paytm.com/images/catalog/view_item/729999/1626259968563.png"
                  className="darkBlue"
               />
               <Card
                  buttonText="Invest In Stock >"
                  img="https://assetscdn1.paytm.com/images/catalog/view_item/730001/1626450848003.png"
                  className="darkBlue"
               />
            </div>
         </Container>
      </div>
   );
};

export default BuySection;
