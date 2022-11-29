'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`flex justify-between`}
        >
            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className=''
            >
                <h1 className='text-2xl text-red-500'>Header</h1>

            </motion.div>
            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className=""
            >
               <h1 className='text-2xl text-blue-500'>Description</h1>
            </motion.div>
        </motion.div>
    </section>
);

export default GetStarted;
