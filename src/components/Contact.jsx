import React, { useState } from 'react';
import helloImg from '../assets/img2.jpg';
import toast from 'react-hot-toast';
import Header from './Header';

const Contact = () => {

  const [name, setName] =useState("");
  const [email, setEmail] =useState("");
  const [msg, setMsg] =useState("");


  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(name, email, msg)
    toast.success('Data saved successfully!')
  }

  return (
    <div id='contact'>
      <section>
        <form onSubmit={submitHandler}>
          <h2>Contact Me!</h2>

          <input 
          type="text" 
          value={name} 
          onChange={(e)=>setName(e.target.value)} 
          placeholder='Your Name!' 
          required />

          <input 
          type='email'  
          value={email} 
          onChange={(e)=>setEmail(e.target.value)} 
          placeholder='Your Email!' 
          required />

          <textarea name="Your message!"
          value={msg} 
          onChange={(e)=>setMsg(e.target.value)}  
          placeholder='Your message!' rows={12} cols={33}  />

          <button type='submit'>Submit</button>
        </form>
      </section>

      <aside>
        <img src={helloImg} alt="hello" />
      </aside>
    </div>
  )
}

export default Contact
