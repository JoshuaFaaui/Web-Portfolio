import React, { useEffect } from 'react'
import { Animator,batch, Fade, FadeOut, MoveIn, MoveOut,ScrollContainer, ScrollPage,ZoomOut } from 'react-scroll-motion';
import '../styles/Portfolio.sass'
import ForgotPasswordVid from '../Assets/ForgotPassword.mp4'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CustomText from '../components/CustomText';
import StripeSubscription from '../Assets/StripeSubscription.mp4'
function Portfolio() {
    
  const vid1 = useRef(null);
  const isinview1 = useInView(vid1);
  const vid2 = useRef(null);
  const isinview2 = useInView(vid2);
  return (
    <div>
      <CustomText text="Services"/>
      <motion.div initial={{ x: "-100vw" }} animate={{ x: 0 }} transition={{ delay:.3 }} className='VideosContainer'>
        <h1>I offer user account systems into websites</h1>
        <h2>(Forgot Password Process)</h2>
        <video src={ForgotPasswordVid} muted={true} autoPlay={true} controls />
        <p>Here am I as a user, going through a reset password process<br/>which i've built</p>
      </motion.div>
      <section ref={vid1}>
        <motion.div initial={{ x: "-100vw" }} animate={isinview1 ? { x: 0 } : undefined} transition={{ delay: .5 }} className='VideosContainer'>
          <h1>I offer stripe<br/>subscriptions & payments into websites</h1>
          <h2>(Stripe subscription process)</h2>
          <video src={StripeSubscription} muted={true} autoPlay={true} controls />
          <p>Here I am going through a signup and subscription process for a website i've built</p>
        </motion.div>
      </section>
    </div>
  )
}

export default Portfolio