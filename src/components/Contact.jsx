import React, { useState } from 'react';
import helloImg from '../assets/img2.jpg';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import {addDoc, collection} from 'firebase/firestore';
import { db } from '../firebase';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Contact = () => {

  const [name, setName] =useState("");
  const [email, setEmail] =useState("");
  const [msg, setMsg] =useState("");
  const [disableBtn, setDisableBtn]= useState (false);


  const submitHandler= async(e)=>{
    e.preventDefault();
    setDisableBtn(true);

    try {
      await addDoc (collection (db, "contacts"), {name, email, msg})

      setName("");
      setEmail("");
      setMsg("");

      toast.success("Data saved successfully!");
      setDisableBtn(false);

    } catch (error) {
      toast.error("Error");
      console.log("error!")
      setDisableBtn(false);
    } 
  }

  return (
    <>
    <div><Header/></div>
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

          <motion.button
          disabled={disableBtn}
          className={disableBtn ? "disableBtn" : ''}
          type='submit'>Submit</motion.button>
        </motion.form>
      </section>

      <aside>
        <img src={helloImg} alt="hello" />
      </aside>
    </div>
    <div><Footer/></div>
    </>
  )
}

export default Contact