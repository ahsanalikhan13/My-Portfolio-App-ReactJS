import React from 'react';
// import {useNavigate} from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavContent/>
    </nav>
  )
}

const NavContent = () =>{

  // const navigate= useNavigate();
  // const goToContact=()=>{
  //   navigate('/contact');
  // }

  return(
  <>
    <a href="#home"><h2>Ahsan.</h2></a>

    <div>
      <a href="#home">Home</a>
      <a href="#work">Work</a>
      <a href="#timeline">Timeline</a>
      <a href="#services">Services</a>
      <a href="#testimonial">Testimonial</a>
      <a href="#contact">Contact</a>
      {/* <a onClick={()=> goToContact()}>Contact</a> */}

      <div>
      </div>
    </div>


    <a href="mailto:aahsanalikhan.13@gmail.com">
      <button>Email</button>
    </a>
  </>
)}

export default Header;
