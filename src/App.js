import "bootstrap/dist/css/bootstrap.min.css";

//react-router
// import {
//    BrowserRouter as Router,
//    Switch,
//    Routes,
//    Route,
//    Link,
// } from "react-router-dom";
// import { Routes, Route, Outlet, Link } from "react-router-dom";

import "firebase/auth";
import Header from "./Layout/Header";

function App() {
   return (
      <div className="App">
         <Header />
      </div>
   );
}

export default App;
