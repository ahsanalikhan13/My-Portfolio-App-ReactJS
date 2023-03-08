import React, { useRef } from 'react';
import {animate, motion} from 'framer-motion';
import Typewriter from 'typewriter-effect';
import {BsArrowUpRight, BsChevronDown, BsFillHandIndexThumbFill} from 'react-icons/bs';
import ahsan from '../assets/img1.png';


const Home = () => {

  const clientCount=useRef(null);
  const animationClientsCount = () =>{
    animate(0,100, {
      duration:1,
      onUpdate: (c) => (clientCount.current.textContent=c.toFixed())
    })
  }

  const projectCount= useRef(null)
  const animationProjectsCount = () =>{
    animate(0, 500, {
      duration: 1,
      onUpdate: (p) => (projectCount.current.textContent=p.toFixed())
    })
  }
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
              strings: ["Frontend Developer", "JavaScript, ReactJS"],
              autoStart: true,
              loop: true,
              cursor: null,
              wrapperClassName:"typewriterpara",
            }}
            />

            <div>
            <a href="mailto:aahsanalikhan.13@gmail.com">Hire Me! <BsFillHandIndexThumbFill/></a>
            <a href="#work">Projects! <BsArrowUpRight/></a>
            </div>
            
            <article>

              <p>
                +<motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span>
              </p>

              <span>Clients WorldWide!</span>
            </article>

            <aside>
            <article>

              <p>
                +<motion.span whileInView={animationProjectsCount} ref={projectCount}></motion.span>
              </p>

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
