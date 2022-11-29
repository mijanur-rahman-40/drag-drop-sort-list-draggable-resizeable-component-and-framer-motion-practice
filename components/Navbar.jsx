import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`py-8 bg-lime-300 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`mx-auto flex justify-between gap-8`}
    >
      <h1>App Name</h1>
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        Framer Motion
      </h2>
      <img
        src="/menu.svg"
        alt="menu"
        className=" object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
