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

   return (
      <div className="horizontalScrollContent">
         <div className="scroll-container text-center" ref={scrollContainerRef}>
            <div className="scroll-content">
               <MoneyCard
                  img="https://assetscdn1.paytm.com/images/catalog/view_item/728894/1618576143299.png"
                  imgWidth="158"
                  imgHeight="145"
                  tag="Invest in Stocks"
                  backgroudColor="backgroundBlue"
               />
               <MoneyCard
                  img="https://assetscdn1.paytm.com/images/catalog/view_item/728894/1618576143299.png"
                  imgWidth="158"
                  imgHeight="145"
                  tag="Invest in Stocks"
                  backgroudColor="backgroundBlue"
               />

               <MoneyCard
                  img="https://assetscdn1.paytm.com/images/catalog/view_item/728894/1618576143299.png"
                  imgWidth="158"
                  imgHeight="145"
                  tag="Invest in Stocks"
                  backgroudColor="backgroundBlue"
               />
               <MoneyCard
                  img="https://assetscdn1.paytm.com/images/catalog/view_item/728894/1618576143299.png"
                  imgWidth="158"
                  imgHeight="145"
                  tag="Invest in Stocks"
                  backgroudColor="backgroundBlue"
               />
               <MoneyCard
                  img="https://assetscdn1.paytm.com/images/catalog/view_item/728894/1618576143299.png"
                  imgWidth="158"
                  imgHeight="145"
                  tag="Invest in Stocks"
                  backgroudColor="backgroundBlue"
               />
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
