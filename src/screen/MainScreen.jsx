import React from "react";
import Header from '../components/Header';
import Home from '../components/Home';
import Services from "../components/Services";
import Timeline from "../components/Timeline";
import Work from "../components/Work";
import Testimonial from "../components/Testimonial";
import { Toaster } from "react-hot-toast";



function MainScreen() {
  return( <>
    <Header/>
    <Home/>
    <Work/>
    <Timeline/>
    <Services/>
    <Testimonial/>
    <Toaster/>
    </>
    )
  }
  
export default MainScreen;
