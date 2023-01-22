import React from "react";
import { Container } from "reactstrap";
import Card from "../../Components/Card";
import "./BillsSection.css";

const cardData = [
   {
      buttonText: {
         lineOne: "Recharge",
         lineTwo: "Prepaid",
         lineThree: "Mobile >",
      },
      img: "https://assetscdn1.paytm.com/images/catalog/view_item/733299/1626251017535.png",
   },
   {
      buttonText: {
         lineOne: "Pay",
         lineTwo: "Electricity",
         lineThree: "Bill >",
      },
      img: "https://assetscdn1.paytm.com/images/catalog/view_item/733308/1626251043534.png",
   },
   {
      buttonText: {
         lineOne: "Recharge",
         lineTwo: " DTH",
         lineThree: "Conection >",
      },
      img: "	https://assetscdn1.paytm.com/images/catalog/view_item/733311/1626251101045.png",
   },

   {
      buttonText: {
         lineOne: "Book",
         lineTwo: "Gas",
         lineThree: "Cylinder >",
      },
      img: "	https://assetscdn1.paytm.com/images/catalog/view_item/733307/1626251127863.png",
   },

   {
      buttonText: {
         lineOne: "Pay",
         lineTwo: "Broadband &",
         lineThree: "Landline Bill >",
      },
      img: "https://assetscdn1.paytm.com/images/catalog/view_item/1269194/1672827522093.png",
   },
   {
      buttonText: {
         lineOne: "Pay",
         lineTwo: "Education",
         lineThree: "Fee >",
      },
      img: "	https://assetscdn1.paytm.com/images/catalog/view_item/1269198/1672828917034.png",
   },
   {
      buttonText: {
         lineOne: "All",
         lineTwo: "Payment",
         lineThree: "Servicese >",
      },
      img: "https://assetscdn1.paytm.com/images/catalog/view_item/757701/1626268580682.png",
   },
];

const BillsSection = () => {
   return (
      <div className="bills">
         <Container className="billsContent">
            <h1>Reacharge & pay Bills On Paytm.</h1>
            <div className="billsCard">
               {cardData.map((item) => (
                  <Card
                     key={item.img}
                     buttonText={item.buttonText}
                     img={item.img}
                  />
               ))}
            </div>
         </Container>
      </div>
   );
};

export default BillsSection;
