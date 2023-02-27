import React from 'react';
import {motion} from 'framer-motion';

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
            
        }
    }
  return (
    <div id='home'>
      <section>
        <div>
            <motion.h1 initial {...animations.h1}>
                Hi, I am <br/> AHSAN ALI KHAN
            </motion.h1>
        </div>
      </section>
    </div>
  )
}
export default Home
