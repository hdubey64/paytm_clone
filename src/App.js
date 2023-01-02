import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, Outlet, Link } from "react-router-dom";

import "firebase/auth";
import Header from "./Layout/Header";

function App() {
   return (
      <div>
         <Header />
      </div>
   );
}

export default App;
