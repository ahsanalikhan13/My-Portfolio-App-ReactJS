import React from "react";
import Header from './components/Header';
import Home from './components/Home';
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";



function App() {
  return( <>
    <Header/>
    <Home/>
    <Work/>
    <Timeline/>
    <Services/>
    <Testimonial/>
    <Contact/>
    </>
    )
  }
  
export default App;
