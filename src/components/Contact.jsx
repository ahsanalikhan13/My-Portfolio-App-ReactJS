import React, { useState } from 'react';
import helloImg from '../assets/img2.jpg';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import {addDoc, collection} from 'firebase/firestore';
import { db } from '../firebase';

const Contact = () => {

  const [name, setName] =useState("");
  const [email, setEmail] =useState("");
  const [msg, setMsg] =useState("");


  const submitHandler= async(e)=>{
    e.preventDefault();

    try {
      await addDoc (collection (db, "contacts"), {name, email, msg})

      toast.success("Data saved successfully!");

    } catch (error) {
      toast.error("Error");
      console.log("error!")
    }

   
  }

  return (
    <div id='contact'>
      <section>
        <motion.form onSubmit={submitHandler}>
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

          <motion.button type='submit'>Submit</motion.button>
        </motion.form>
      </section>

      <aside>
        <img src={helloImg} alt="hello" />
      </aside>
    </div>
  )
}

export default Contact
