import React from "react";
import { Container } from "reactstrap";
import Card from "../../Components/Card";
import "./BillsSection.css";

const cardData = [
   {
      buttonText: "Recharge Prepaid Mobile >",
      img: "https://assetscdn1.paytm.com/images/catalog/view_item/733299/1626251017535.png",
      className: "cardBtn-2",
   },
   {
      buttonText: "Pay Electricity Bill >",
      img: "https://assetscdn1.paytm.com/images/catalog/view_item/733308/1626251043534.png",
      className: "cardBtn-2",
   },
   {
      buttonText: "Recharge DTH Conection >",
      img: "	https://assetscdn1.paytm.com/images/catalog/view_item/733311/1626251101045.png",
      classNam: "cardBtn-2",
   },
   {
      buttonText: "Book Gas Cylinder >",
      img: "	https://assetscdn1.paytm.com/images/catalog/view_item/733307/1626251127863.png",
      className: "cardBtn-2",
   },

   {
      buttonText: "Pay Broadband & Landline Bill >",
      img: "https://assetscdn1.paytm.com/images/catalog/view_item/1269194/1672827522093.png",
      className: "cardBtn-2",
   },
   {
      buttonText: "Pay Eduction Fee >",
      img: "	https://assetscdn1.paytm.com/images/catalog/view_item/1269198/1672828917034.png",
      className: "cardBtn-2",
   },
   {
      buttonText: "All Payment Servicese >",
      img: "https://assetscdn1.paytm.com/images/catalog/view_item/757701/1626268580682.png",
      className: "cardBtn-2",
   },
];

const BillsSection = () => {
   return (
      <div className="bills">
         <Container>
            <h1>Reacharge & pay Bills On Paytm.</h1>
            <div className="billsCard">
               {cardData.map((item) => (
                  <Card
                     key={item.img}
                     buttonText={item.buttonText}
                     img={item.img}
                     className={item.className}
                  />
               ))}
            </div>
         </Container>
      </div>
   );
};

export default BillsSection;
