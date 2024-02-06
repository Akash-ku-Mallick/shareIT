import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useCycle } from 'framer-motion'

// styles from local files
import '../styles/sideBar.css'

const SideBar = () => {
  const [ isOpen, toggle ] = useCycle(true, false);
  const navigate = useNavigate();
  
  return (
    <motion.div className='custom_container' style={{display: 'none'}}>
      <Header />
      <Sender nav={navigate} toggleFunc={()=>{toggle()}}/>
      <Reciver nav={navigate} toggleFunc={()=>{toggle()}}/>
      <My_files nav={navigate} toggleFunc={()=>{toggle()}}/>
      <Histroy nav={navigate} toggleFunc={()=>{toggle()}}/>
      <Footer />
    </motion.div>
  )
}

export default SideBar

function Header (props) {
  return (
    <div>
      <span>
        Header Text
      </span>
    </div>
  )
}

function My_files (props) {

  function ClickHandler () {
    props.nav('/files');
    props.toggleFunc();
  }

  return (
    <div onClick={ClickHandler} className='sidebar_option'>
      <span> Files </span>
    </div>
  )
}

function Sender (props) {

  function ClickHandler () {
    props.nav('/send');
    props.toggleFunc();
  }

  return (
    <div onClick={ClickHandler} className='sidebar_option'>
      <span> Send </span>
    </div>
  )
}

function Reciver (props) {

  function ClickHandler () {
    props.nav('/recive');
    props.toggleFunc();
  }

  return (
    <div onClick={ClickHandler} className='sidebar_option'>
      <span> Recive </span>
    </div>
  )
}

function Histroy (props) {

  function ClickHandler () {
    props.nav('/history');
    props.toggleFunc();
  }

  return (
    <div onClick={ClickHandler} className='sidebar_option'>
      <span> Histroy </span>
    </div>
  )
}

function Footer () {

  function ClickHandler () {
    alert("Clicked ");
  }

  return (
    <div onClick={ClickHandler} className='sidebar_option'>
      <div>
        Links
      </div>
      <div>
        <span>
          footer text
        </span>
      </div>
    </div>
  )
}