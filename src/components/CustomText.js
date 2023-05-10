import React from 'react'
import '../styles/customtext.css'
import { motion } from 'framer-motion'
function CustomText({text}) {
  return (
    <motion.div className="content" initial={{ x: "-100vw" }} animate={{ x: 0 }} >
        <h1 className="title">
            {text}
            <div className="aurora">
            <div className="aurora__item"></div> <div className="aurora__item"></div> <div className="aurora__item"> </div> <div className="aurora__item"></div> </div>
        </h1>
    </motion.div>
  )
}
              

export default CustomText