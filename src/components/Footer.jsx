import React from 'react';
import ahsan from '../assets/img1.png';
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiOutlineArrowUp} from 'react-icons/ai';

const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          <img src={ahsan} alt="footer" />

          <h2>Ahsan Ali Khan</h2>
          <p>A software engineering grad. Enhancing technical skills . I am exploring new technologies and libraries. Currently working as a React developer and have worked on multiple projects.</p>
        </div>

        <aside>
          <h2>Social Media</h2>
          <a href="https://instagram.com/ahsanalikhan.13" target={"blank"}> <AiFillInstagram/></a>
          <a href="https://facebook.com/ahsanalikhan" target={"blank"}> <AiFillFacebook/></a>
          <a href="https://twitter.com/ahsanalikhan_13" target={"blank"}> <AiFillTwitterSquare/></a>

        </aside>

        <a href="#home"> <AiOutlineArrowUp/></a>
      </footer>
    </div>
  )
}

export default Footer
