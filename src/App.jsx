import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Work from "./components/Work";


function App() {
  return( <>
  <BrowserRouter>
    <Header/>
    <Home/>
    <Work/>
    <Timeline/>
    <Services/>
    </BrowserRouter>
    </>
    )
  }
  
export default App;
