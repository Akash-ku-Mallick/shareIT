import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Receive = () => {
  const [modal, setModal] = useState(false)
  const [downloadUrl, setUrl] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    // Your form submission logic here
    // popup box for setting time limit and password
    setModal(true)
  }

  useEffect(() => {
    if (modal) {
      setTimeout(() => {
        setUrl("http://localhost/download")
      }, 3000);
    }
    else {
      setUrl(null)
    }
  }, [modal]);

  return (
    <motion.div className='main_body'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.5, ease: 'easeIn', staggerChildren: 0.2}}>
      <h1>Receive</h1>
      <div className='form_container'>
        <form>
          <div className='text_input'>
            <label>Enter the Reciver ID</label>
            <input type='text' placeholder='Enter the Reciver ID' />
          </div>
          <div className='text_input'>
            <label>Enter the code</label>
            <input type='text' placeholder='Enter the code' />
          </div>
          <button type='submit' onClick={(e)=>{handleSubmit(e)}}>Enter</button>
        </form>
      </div>
      {modal && <Modal setModal={setModal} url={downloadUrl} />}
    </motion.div>
  )
}

export default Receive

const Modal = (props) => {
  return (
    <motion.div className='modal'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.25, ease: 'easeIn'}}>
      <motion.div className='modal_content'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.25, ease: 'easeIn', delay: 0.25, staggerChildren: 0.2}}>
        <h2>Modal</h2>
        <p>Some text in the Modal..</p>
        {props.url!=null?<p>{props.url}</p>:<p>Loading...</p>}
        <button onClick={()=>props.setModal(false)}>Close</button>
      </motion.div>
    </motion.div>
  )
}
