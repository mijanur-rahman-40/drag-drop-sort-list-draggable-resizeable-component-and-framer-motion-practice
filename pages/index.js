import React from 'react';
import { motion, } from 'framer-motion';
import Navbar from '../components/Navbar';
import GettingStarted1 from '../components/GettingStarted1';
import Insights from '../components/Insights';
import About from '../components/About';
import GettingStarted2 from '../components/GettingStarted2';
import SimpleAccordian from '../components/SimpleAccordian';
import { ComplexAccordian } from '../components/Accordian';

// Dropdown items open animation
const variants = {
  open: { opacity: 1, y: 100 },
  closed: { opacity: 0, y: 50 },
}

export default function FramerMotion() {
  const [isOpen, setIsOpen] = React.useState(false)
  // Dropdown items open animation

  let dropdowns = <motion.nav
    animate={isOpen ? "open" : "closed"}
    variants={variants}
  >
    <div className='w-52 h-48 rounded-lg p-5 shadow-xl bg-blue-500 border'>
      <li>Home</li>
      <li>Contact</li>
    </div>
  </motion.nav>


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

  // hover animation scale
  let scale = <motion.div
    onHoverStart={e => { }}
    onHoverEnd={e => { }}
    whileHover={{
      scale: 1.3
    }}
    style={{ width: 64, height: 64 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      width="100%"
      viewBox="0 0 24 24"
      fill="#000"
    >
      <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
      <path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h5v12H1z" />
    </svg>
  </motion.div>

  return <div className="m-auto py-5">
    {dropdowns}
    <button
      className='bg-blue-500 p-2 rounded-xl'
      onClick={() => setIsOpen(isOpen => !isOpen)}
    >
      {isOpen ? 'Cose' : 'Open'}
    </button>
    {scale}

    <h1 className='text-2xl text-gray-400 font-extrabold'>
      FRAMER MOTION ANIMATION
      <span className='text-blue-700'> PRACTICE WITH</span>
      NEXTJS LIBRARY
    </h1>
    <Navbar />
    <GettingStarted1 />
    <SimpleAccordian />
    <ComplexAccordian />
    <Insights />
    <GettingStarted2 />
    <About />
  </div>;
}