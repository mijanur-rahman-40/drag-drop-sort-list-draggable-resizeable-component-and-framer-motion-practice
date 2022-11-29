import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from './CustomTexts';

const Insights = () => {
    const insights = ['Hello', 'World This', 'Is A Test'];

    return <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={` mx-auto flex flex-col`}
        >
            <TypingText title="| FRAMER MOTION" textStyles="text-center" />
            <TitleText title={<>Insight about metaverse</>} textStyles="text-center" />
            <div className="mt-[50px] flex flex-col gap-[30px]">
                {insights.map((item, index) => (
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
    </section>
};

export default Insights;
