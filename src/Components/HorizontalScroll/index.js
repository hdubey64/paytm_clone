import React, { useRef } from "react";
import MoneyCard from "../MoneyCard/index";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./style.css";

const HorizontalScroll = () => {
   const scrollContainerRef = useRef(null);
   const handleLeftButtonClick = () => {
      scrollContainerRef.current.scrollLeft -= 250;
   };
   const handleRightButtonClick = () => {
      scrollContainerRef.current.scrollLeft += 250;
   };

   const moneyData = [
      {
         img: "https://assetscdn1.paytm.com/images/catalog/view_item/728894/1618576143299.png",
         investTag: "Invest in Stocks",
         backgroudColor: "backgroundBlue",
      },
      {
         img: "	https://assetscdn1.paytm.com/images/catalog/view_item/728895/1618575899205.png",
         investTag: "Apply for IPO",
         backgroudColor: "backgroundBlue",
      },
      {
         img: "	https://assetscdn1.paytm.com/images/catalog/view_item/800760/1618831809222.png",
         investTag: "Invest in ETFs",
         backgroudColor: "backgroundBlue",
      },
      {
         img: "https://assetscdn1.paytm.com/images/catalog/view_item/728896/1618575990183.png",
         investTag: "Buy Gold ",
         backgroudColor: "backgroundBlue",
      },
      {
         img: "https://assetscdn1.paytm.com/images/catalog/view_item/728899/1618576408440.png",
         investTag: "Invest in Mutual Fund",
         backgroudColor: "backgroundBlue",
      },
   ];

   return (
      <div className="horizontalScrollContent">
         <div className="scroll-container text-center" ref={scrollContainerRef}>
            <div className="scroll-content">
               {moneyData.map((item) => (
                  <MoneyCard
                     key={item.img}
                     img={item.img}
                     imgWidth="145"
                     imgHeight="158"
                     investTag={item.investTag}
                     backgroudColor={item.backgroudColor}
                  />
               ))}
            </div>
         </div>
         <button className="left-button" onClick={handleLeftButtonClick}>
            <FaAngleLeft className=" text-center my-1" />
         </button>
         <button className="right-button" onClick={handleRightButtonClick}>
            <FaAngleRight className=" text-center my-1" />
         </button>
      </div>
   );
};

export default HorizontalScroll;
