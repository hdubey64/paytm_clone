import React, { useRef } from "react";
import MoneyCard from "../MoneyCard/index";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./style.css";

const HorizontalScrollTravel = () => {
   const scrollContainerRef = useRef(null);
   const handleLeftButtonClick = () => {
      scrollContainerRef.current.scrollLeft -= 250;
   };
   const handleRightButtonClick = () => {
      scrollContainerRef.current.scrollLeft += 250;
   };

   return (
      <div className="horizontalScrollTravelContent">
         <div className="scroll-container text-center" ref={scrollContainerRef}>
            <div className="scroll-content">
               <MoneyCard
                  img="https://assetscdn1.paytm.com/images/catalog/view_item/863734/1627552693557.png"
                  imgWidth="72"
                  imgHeight="72"
                  travelTag="Flat 14% Cashback "
                  investParagraph="With Code WELCOMEFLIGHT"
                  backgroudColor="travelCard"
               />
               <MoneyCard
                  img="https://assetscdn1.paytm.com/images/catalog/view_item/864144/1627566096011.png"
                  imgWidth="72"
                  imgHeight="72"
                  travelTag="100% Refund"
                  investParagraph="With Paytm's Cancellation Protect"
                  backgroudColor="travelCard"
               />
               <MoneyCard
                  img="https://assetscdn1.paytm.com/images/catalog/view_item/864145/1627566172335.png"
                  imgWidth="72"
                  imgHeight="72"
                  travelTag="Flat 10% Cashback"
                  investParagraph="With code HAPPYBUS"
                  backgroudColor="travelCard"
               />

               <MoneyCard
                  img="https://assetscdn1.paytm.com/images/catalog/view_item/864151/1627567062180.png"
                  imgWidth="72"
                  imgHeight="72"
                  travelTag="Sanitised Bus Options With TravelSaf"
                  backgroudColor="travelCard"
               />
               <MoneyCard
                  img="	https://assetscdn1.paytm.com/images/catalog/view_item/864152/1627566492097.png"
                  imgWidth="72"
                  imgHeight="72"
                  travelTag="Hassle Free Train Ticket Bookings"
                  backgroudColor="travelCard"
               />
               <MoneyCard
                  img="https://assetscdn1.paytm.com/images/catalog/view_item/864153/1627566396231.png"
                  imgWidth="72"
                  imgHeight="72"
                  travelTag="PNR Status Check In Few Simple Clicks"
                  backgroudColor="travelCard"
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

export default HorizontalScrollTravel;
