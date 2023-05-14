import React from 'react'
import HomeNav from '../components/Home/HomeNav'
import { motion } from 'framer-motion';
import CustomText from '../components/CustomText';
import '../styles/Home/Content/Home.sass'
import InstaLogo from '../Assets/InstaLogo.png'
import TwitterLogo from '../Assets/TwitterLogo.png'
function Home() {
  return (
    <motion.div className="w-screen h-screen" id="HomeFoundation" initial={{opacity:-1}} animate={{opacity:1,transition:{duration:1}}} exit={{opacity:-1,transition:{duration:1}}}>
      <HomeNav/>
      <CustomText text="Web Served" />
      <h2>Welcome to Web Served! we serve current & potential customers<br />such as small or private businesses, eccomerce businesses, entrepreurs & anyone who may be looking to have an online store built and hosted</h2>
      <div id='aboutmecontainer'>
        <div id='aboutmetext'>
          <h1>About Me</h1>
          <p>I am a intelligent young 17 yr old software developer, with an entrepreneurial mindset to help others with their business, along our journey to success</p>
        </div>
        <div id='socialmedia'>
          <h1>Social Media</h1>
          <ul>
            <li><img src={InstaLogo} alt='InstaLogo' /><label>@web_served</label></li>
            <li><img src={TwitterLogo} alt='TwitterLogo' /><label>@JoshuaFaaui</label></li>

          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Home