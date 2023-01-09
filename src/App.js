import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, Outlet, Link } from "react-router-dom";

import "firebase/auth";
import Header from "./Layout/Header/Header";
import { HeroSection } from "./Layout/Hero Section/HeroSection";
import BillsSection from "./Layout/Bill Section/BillsSection";
import BuySection from "./Layout/Buy Section/BuySection";
import PaytmWallet from "./Layout/Payments Instrament/PaytmWallet";
import CardSection from "./Layout/CardSection";
import FinancialSection from "./Layout/Financial Services";
import PaytmMoney from "./Layout/PaytmMoney";
import InsuranceBroking from "./Layout/InsuranceBroking";

function App() {
   return (
      <div>
         <Header />
         <HeroSection />
         <BillsSection />
         <BuySection />
         <PaytmWallet />
         <CardSection />
         <FinancialSection />
         <PaytmMoney />
         <InsuranceBroking />
      </div>
   );
}

export default App;
