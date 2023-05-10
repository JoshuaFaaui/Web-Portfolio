import React from 'react'
import { Animator,batch, Fade, FadeOut, MoveIn, MoveOut,ScrollContainer, ScrollPage,ZoomOut } from 'react-scroll-motion';
import '../styles/Portfolio.sass'
import ForgotPasswordVid from '../Assets/ForgotPassword.mp4'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CustomText from '../components/CustomText';
import StripeSubscription from '../Assets/StripeSubscription.mp4'
function Portfolio() {
    const vid1 = useRef(null);
    const isinview1 = useInView(vid1, { once: true });
  return (
    <div>
      <CustomText text="Portfolio"/>
      <motion.div initial={{ x: "-100vw" }} animate={{ x: 0 }} transition={{ delay:.3 }} className='VideosContainer'>
        <h1>i've managed users accounts</h1>
        <h2>(Forgot Password Process)</h2>
        <video src={ForgotPasswordVid} muted={true} autoPlay={true} controls />
        <p>I offer account managing(login&signup) processes in your website</p>
      </motion.div>
      <section ref={vid1}>
        <motion.div initial={{ x: "-100vw" }} animate={isinview1 ? { x: 0 } : undefined} transition={{ delay: .5 }} className='VideosContainer'>
          <h1>i've managed stripe<br/>subscriptions & payments in websites</h1>
          <h2>(Stripe subscription process)</h2>
          <video src={StripeSubscription} muted={true} autoPlay={true} controls />
          <p>Payment or subscription services to your website is available</p>
        </motion.div>
      </section>
    </div>
  )
}

export default Portfolio