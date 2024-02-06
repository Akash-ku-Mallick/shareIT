import React from 'react'
import { Outlet } from 'react-router-dom'

// Components from local files
import Sidebar from '../components/sidebar.jsx'
import BottomBar from '../components/bottombar.jsx'

// methods from local files
import { setSession } from '../utils/session.js'

const Home = () => {
    const [ifMobile, setIfMobile] = React.useState(false);
    const [sessionCode, setSessionCode] = React.useState('');

    // Onmount call
    React.useEffect(() => {
        window.addEventListener("resize", () => handleWindowResize({ setIfMobile }));
        setSessionCode(setSession());
    }, []);

    
  return (
    <div className='main_body'>
        {ifMobile ? <BottomBar /> : <Sidebar />}
        <Outlet />
    </div>
  )
}

export default Home

function handleWindowResize ({ setIfMobile }) {
    // Check if phpne or not
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // true for mobile device
      setIfMobile(true);
    } else {
      // false for not mobile device
      setIfMobile(false);
    }
  }
