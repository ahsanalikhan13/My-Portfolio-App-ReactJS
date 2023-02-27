import React from 'react';
import {motion} from 'framer-motion';
import Typewriter from 'typewriter-effect';
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs';
import ahsan from '../assets/img1.png';


const Home = () => {

    const animations={
        h1:{
            initial: {
                x:"-100%",
                opacity: 0,
            },
                whileInView:{
                    x: 0,
                    opacity: 1,
                }          
        },

        button:{
          initial: {
              y:"-100%",
              opacity: 0,
          },
              whileInView:{
                  y: 0,
                  opacity: 1,
              }          
        }
    }

  return (
    <div id='home'>
      <section>
        <div>
            <motion.h1 initial {...animations.h1}>

                Hi, I am <br/> AHSAN ALI KHAN

            </motion.h1>

            <Typewriter
            options={{
              strings: ["A React Developer", "JavaScript Developer", "Scrum Master"],
              autoStart: true,
              loop: true,
              cursor: null,
              wrapperClassName:"typewriterpara",
            }}
            />

            <div>
            <a href="mailto:aahsanalikhan.13@gmail.com">Hire Me!</a>
            <a href="#work">Projects! <BsArrowUpRight/></a>
            </div>
            
            <article>
              <p>+<span>100</span></p>
              <span>Clients WorldWide!</span>
            </article>

            <aside>
            <article>
              <p>+<span>500</span></p>
              <span>Projects Accomplished!</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>aahsanalikhan.13@gmail.com</span>
            </article>
            </aside>
        </div>
      </section>

      <section>
        <img src={ahsan} alt="ahsan" />
      </section>

      <BsChevronDown/>
    </div>
  )
}
export default Home;