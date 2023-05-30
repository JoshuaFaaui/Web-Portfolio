import React, { useRef, useState } from 'react'
import HomeNav from '../components/Home/HomeNav'
import { motion, useInView } from 'framer-motion';
import CustomText from '../components/CustomText';
import '../styles/Home/Content/Home.sass'
import InstaLogo from '../Assets/InstaLogo.png'
import TwitterLogo from '../Assets/TwitterLogo.png'
import axios from 'axios';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Helmet } from 'react-helmet-async';
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
  const vid1 = useRef(null);
  const isinview1 = useInView(vid1);
  const vid2 = useRef(null);
  const isinview2 = useInView(vid2);
  return (
    <motion.div className="w-screen h-screen" id="HomeFoundation" initial={{ opacity: -1 }} animate={{ opacity: 1, transition: { duration: 1 } }} exit={{ opacity: -1, transition: { duration: 1 } }}>
      <Helmet>
        <title>Web Served - Building Websites For Small/Private Businesses</title>
        <meta name='description' content="𝐖𝐞 𝐬𝐞𝐫𝐯𝐞 𝐚𝐧𝐲𝐨𝐧𝐞 𝐰𝐡𝐨's 𝐥𝐨𝐨𝐤𝐢𝐧𝐠 𝐭𝐨 𝐡𝐚𝐯𝐞 𝐚𝐧 𝐨𝐧𝐥𝐢𝐧𝐞 𝐬𝐭𝐨𝐫𝐞 𝐛𝐮𝐢𝐥𝐭 𝐚𝐧𝐝 𝐡𝐨𝐬𝐭𝐞𝐝" />
        <link rel='canonical' href='/'/>
      </Helmet>
      <HomeNav/>
      <CustomText text="ᴡᴇʙ ꜱᴇʀᴠᴇᴅ" />
      <motion.h1 initial={{ x: "-100vw" }} animate={{ x: 0}} transition={{ delay:.2 }} id='WelcomeHomeHeader'>Welcome to Web Served!</motion.h1>
      <motion.h2 initial={{ x: "-100vw" }} animate={{ x: 0}} transition={{ delay:.3 }}>𝐖𝐞 𝐬𝐞𝐫𝐯𝐞 𝐜𝐮𝐫𝐫𝐞𝐧𝐭 & 𝐩𝐨𝐭𝐞𝐧𝐭𝐢𝐚𝐥 𝐜𝐮𝐬𝐭𝐨𝐦𝐞𝐫𝐬 𝐬𝐮𝐜𝐡 𝐚𝐬<br />𝐬𝐦𝐚𝐥𝐥 𝐨𝐫 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬𝐞𝐬, 𝐞𝐜𝐜𝐨𝐦𝐞𝐫𝐜𝐞 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬𝐞𝐬, 𝐞𝐧𝐭𝐫𝐞𝐩𝐫𝐞𝐮𝐫𝐬 & 𝐚𝐧𝐲𝐨𝐧𝐞 𝐰𝐡𝐨 𝐦𝐚𝐲 𝐛𝐞 𝐥𝐨𝐨𝐤𝐢𝐧𝐠 𝐭𝐨 𝐡𝐚𝐯𝐞 𝐚𝐧 𝐨𝐧𝐥𝐢𝐧𝐞 𝐬𝐭𝐨𝐫𝐞 𝐛𝐮𝐢𝐥𝐭 𝐚𝐧𝐝 𝐡𝐨𝐬𝐭𝐞𝐝.</motion.h2>
      <div id='aboutmecontainer'>
        <motion.div initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }} id='aboutmetext'>
          <h1>About Me</h1>
          <p>𝐈 𝐚𝐦 𝐚 𝐲𝐨𝐮𝐧𝐠 𝟏𝟕 𝐲𝐫 𝐨𝐥𝐝 𝐬𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫, 𝐰𝐢𝐭𝐡 𝐚𝐧 𝐞𝐧𝐭𝐫𝐞𝐩𝐫𝐞𝐧𝐞𝐮𝐫𝐢𝐚𝐥 𝐦𝐢𝐧𝐝𝐬𝐞𝐭 𝐭𝐨 𝐡𝐞𝐥𝐩 𝐨𝐭𝐡𝐞𝐫𝐬 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞𝐢𝐫 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬, 𝐚𝐥𝐨𝐧𝐠 𝐨𝐮𝐫 𝐣𝐨𝐮𝐫𝐧𝐞𝐲 𝐭𝐨 𝐬𝐮𝐜𝐜𝐞𝐬𝐬!</p>
        </motion.div>
        <motion.div initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }} id='socialmedia'>
          <h1>Social Media</h1>
          <ul>
            <li><img src={InstaLogo} alt='InstaLogo' /><label>@𝐰𝐞𝐛_𝐬𝐞𝐫𝐯𝐞𝐝</label></li>
            <li><img src={TwitterLogo} alt='TwitterLogo' /><label>@𝐉𝐨𝐬𝐡𝐮𝐚𝐅𝐚𝐚𝐮𝐢</label></li>

          </ul>
        </motion.div>
      </div>
      <motion.form initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }} id='emailform' onSubmit={SendMail}>
        <h1>Contact Me</h1>
        <TextField required variant='outlined' label="your email" className='emailinputs' autoComplete='off' value={usersEmail} onChange={(e)=>setUsersEmail(e.target.value)}/>
        <TextField required variant='outlined' label="message" className='emailinputs' autoComplete='off' value={usersMessage} onChange={(e)=>setUsersMessage(e.target.value)}/>
        <Button type="submit" variant="contained" id='emailsubmit'>Send</Button>
      </motion.form>
    </motion.div>
  );
}

export default Home