import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Welcome = () => {

  const navigate = useNavigate()

  function onSendClick() {
    navigate('/send')
  }

  function onReciveClick() {
    navigate('/recive')
  }
  return (
    <motion.div className='main_body'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.5, ease: 'easeIn', staggerChildren: 0.2}}>
      <div className='header'>
        <h2>app name</h2>
        <h3>app description</h3>
        <p>app tagline</p>
      </div>
      <div className='main_body'>
        <div className='main_btn' onClick={onSendClick}>
          send
        </div>
        <div className='main_btn' onClick={onReciveClick}>
          recive
        </div>
      </div>
      <div className='footer'>
        <p>footer</p>
        <span>footer</span>
      </div>
    </motion.div>
  )
}

export default Welcome
