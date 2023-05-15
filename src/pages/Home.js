import React, { useState } from 'react'
import HomeNav from '../components/Home/HomeNav'
import { motion } from 'framer-motion';
import CustomText from '../components/CustomText';
import '../styles/Home/Content/Home.sass'
import InstaLogo from '../Assets/InstaLogo.png'
import TwitterLogo from '../Assets/TwitterLogo.png'
import axios from 'axios';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
function Home() {
  const [usersEmail, setUsersEmail] = useState('')
  const [usersMessage,setUsersMessage] = useState('')
  const SendMail = (e) => {
    e.preventDefault()
    axios.post('https://web-served.onrender.com', {
      users_email: usersEmail,
      users_message:usersMessage
    })
    setUsersEmail('')
    setUsersMessage('')
    alert('email successfully sent, will get back to you soon. Have a great day!')
  }
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
      <form id='emailform' onSubmit={SendMail}>
        <h1>Contact Me</h1>
        <TextField required variant='outlined' label="your email" className='emailinputs' autoComplete='off' value={usersEmail} onChange={(e)=>setUsersEmail(e.target.value)}/>
        <TextField required variant='outlined' label="message" className='emailinputs' autoComplete='off' value={usersMessage} onChange={(e)=>setUsersMessage(e.target.value)}/>
        <Button type="submit" variant="contained" id='emailsubmit'>Send</Button>
      </form>
    </motion.div>
  );
}

export default Home