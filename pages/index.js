import React from 'react';
import { motion, } from 'framer-motion';
import Navbar from '../components/Navbar';

// Dropdown items open animation
const variants = {
  open: { opacity: 1, y: 100 },
  closed: { opacity: 0, y: 50 },
}

export default function FramerMotion() {
  const [isOpen, setIsOpen] = React.useState(false)
  let animation = '';

  // Dropdown items open animation
  /*
   animation = <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
  >
      <div className='w-52 h-48 rounded-lg p-5 shadow-xl bg-white border'>
          <li>Home</li>
          <li>Contact</li>
      </div>
  </motion.nav>
  */

  // scale animation
  /*
  animation = <motion.div
    initial={{ opacity: 0, scale: 1}}
    animate={{ opacity: 1, scale: 5}}
    transition={{ duration: 3 }}
  >
    <div className='w-52 h-48  rounded-full p-5 shadow-xl bg-lime-300 border'>
      k
    </div>
  </motion.div>
  */


  return <div className="flex justify-center items-center">
    {animation}
    {/* <button
            className='bg-blue-500 p-2 rounded-xl text-white'
            onClick={() => setIsOpen(isOpen => !isOpen)}
        >
            {isOpen ? 'Cose' : 'Open'}
        </button> */}
  <Navbar/>
  </div>;
}