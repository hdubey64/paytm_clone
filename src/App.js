import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, Outlet, Link } from "react-router-dom";

import "firebase/auth";
import Header from "./Layout/Header";
import { HeroSection } from "./Layout/HeroSection";

function App() {
   return (
      <div>
         <Header />
         <HeroSection />
      </div>
   );
}

export default App;
