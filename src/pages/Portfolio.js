import React, { useEffect } from 'react'
import { Animator,batch, Fade, FadeOut, MoveIn, MoveOut,ScrollContainer, ScrollPage,ZoomOut } from 'react-scroll-motion';
import '../styles/Portfolio/Content/Portfolio.sass'
import ForgotPasswordVid from '../Assets/ForgotPassword.mp4'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CustomText from '../components/CustomText';
import StripeSubscription from '../Assets/StripeSubscription.mp4'
import PortfolioNav from '../components/Portfolio/PortfolioNav';
function Portfolio() {
    
  const vid1 = useRef(null);
  const isinview1 = useInView(vid1);
  const vid2 = useRef(null);
  const isinview2 = useInView(vid2);
  return (
    <motion.div initial={{opacity:-1}} animate={{opacity:1,transition:{duration:1}}} exit={{opacity:0,transition:{duration:1}}}>
      <PortfolioNav/>
      {/* <CustomText text="Services"/>
      <motion.div initial={{ x: "-100vw" }} animate={{ x: 0}} transition={{ delay:.3 }} className='VideosContainer'>
        <h1>We offer login&signup<br/>integrations into websites</h1>
        <h2>(Forgot Password Process)</h2>
        <video src={ForgotPasswordVid} muted={true} autoPlay={true} controls />
        <p>As a user, i'm undergoing a password reset process<br/>that I developed during one of my<br/>past projects.</p>
      </motion.div>
      <section ref={vid1}>
        <motion.div initial={{ x: "-100vw" }} animate={isinview1 ? { x: 0 } : undefined} transition={{ delay: .5 }} className='VideosContainer'>
          <h1>We offer stripe<br/>subscriptions & payments into websites</h1>
          <h2>(Stripe subscription process)</h2>
          <video src={StripeSubscription} muted={true} autoPlay={true} controls />
          <p>In this video, i'm in the process of signing up and subscribing,<br/>utilizing a system that I developed in the same<br/>project as the previous video.</p>
        </motion.div>
      </section> */}
    </motion.div>
  )
}

export default Portfolio