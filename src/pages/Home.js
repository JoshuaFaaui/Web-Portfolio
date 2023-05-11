import React from 'react'
import HomeNav from '../components/Home/HomeNav'
import { motion } from 'framer-motion';
import CustomText from '../components/CustomText';
function Home() {
  return (
    <motion.div className="w-screen h-screen" id="homebg" initial={{opacity:-1}} animate={{opacity:1,transition:{duration:1}}} exit={{opacity:-1,transition:{duration:1}}}>
      <HomeNav/>
      <CustomText text="Web Served"/>
    </motion.div>
  );
}

export default Home