import React from "react";
import { Container } from "reactstrap";
import Card from "../../Components/Card";
import "./BuySection.css";

const cardData = [
   {
      buttonText: {
         lineOne: "Movie",
         lineTwo: "Tickets >",
      },
      img: "	https://assetscdn1.paytm.com/images/catalog/view_item/733295/1626259710574.png",
   },
   {
      buttonText: {
         lineOne: "Flight",
         lineTwo: "Tickets >",
      },
      img: "https://assetscdn1.paytm.com/images/catalog/view_item/733296/1626259884425.png",
   },
   {
      buttonText: {
         lineOne: "Bus",
         lineTwo: "Tickets >",
      },
      img: "	https://assetscdn1.paytm.com/images/catalog/view_item/729996/1626260477699.png",
   },
   {
      buttonText: {
         lineOne: "Train",
         lineTwo: "Tickets >",
      },
      img: "	https://assetscdn1.paytm.com/images/catalog/view_item/729996/1626260477699.png",
   },
   {
      buttonText: {
         lineOne: "Buy",
         lineTwo: "Insurance >",
      },
      img: "https://assetscdn1.paytm.com/images/catalog/view_item/729998/1666185237748.png",
   },

   {
      buttonText: {
         lineOne: "International",
         lineTwo: "Flights >",
      },
      img: "	https://assetscdn1.paytm.com/images/catalog/view_item/729999/1626259968563.png",
   },

   {
      buttonText: "Invest ",
      buttonText: {
         lineOne: "Invest",
         lineTwo: "In Stock >",
      },
      img: "https://assetscdn1.paytm.com/images/catalog/view_item/730001/1626450848003.png",
   },
];

const BuySection = () => {
   return (
      <div className="buy">
         <Container className="buyContent">
            <h1>Book & Buy on Paytm.</h1>
            <div className="buyCard">
               {cardData.map((item) => (
                  <Card
                     key={item.img}
                     buttonText={item.buttonText}
                     img={item.img}
                     className="darkBlueColor"
                     btnClassName="card-btn2"
                  />
               ))}
            </div>
         </Container>
      </div>
   );
};

export default BuySection;
