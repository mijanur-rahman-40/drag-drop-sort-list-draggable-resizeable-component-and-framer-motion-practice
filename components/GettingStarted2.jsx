'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from './CustomTexts';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const items = ['Hello', 'World This', 'Is A Test'];

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Framer Motion Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 'spring', index * 0.5, 1)}
              className="flex md:flex-row flex-col gap-2"
            >
              <p className='p-3 bg-lime-200'>{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
