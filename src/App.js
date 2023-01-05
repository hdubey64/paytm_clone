import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, Outlet, Link } from "react-router-dom";

import "firebase/auth";
import Header from "./Layout/Header";
import { HeroSection } from "./Layout/HeroSection";
import BillsSection from "./Layout/BillsSection";
import BuySection from "./Layout/BuySection";
import PaytmWallet from "./Layout/Payments Instrament/PaytmWallet";

function App() {
   return (
      <div>
         <Header />
         <HeroSection />
         <BillsSection />
         <BuySection />
         <PaytmWallet />
      </div>
   );
}

export default App;
