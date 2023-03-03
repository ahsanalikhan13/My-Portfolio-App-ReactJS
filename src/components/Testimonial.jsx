import React from 'react';
import ahsan from '../assets/img1.png';

const Testimonial = () => {
  return (
    <div id='testimonial'>
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard 
        name={"Ahsan"} 
        feedback={"A frontend developer."}/>
        

        <TestimonialCard 
        name={"Usman"} 
        feedback={"A backend developer."}/>

      </section>
    </div>
  )
}

const TestimonialCard=({name, feedback})=>(
  <article>
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" />
    <h3>{name}</h3>
    <p>{feedback}</p>
  </article>
)

export default Testimonial
