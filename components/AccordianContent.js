import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Accordion = ({ id }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <motion.div
                onClick={() => setIsOpen((prev) => !prev)}
                style={{ background: 'blue', color: 'white' }}
            >
                Accordion {id} is {isOpen ? 'open' : 'closed'}
            </motion.div>
            <AnimatePresence>
                {isOpen ? (
                    <motion.div
                        initial={{ opacity: 0, y: '-10%' }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.5,
                            },
                        }}
                        exit={{
                            opacity: 0,
                            y: '-10%',
                            transition: {
                                duration: 0.5,
                            },
                        }}
                    >
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                            unde cumque, dicta maxime sequi ad? Minus explicabo accusamus
                            dignissimos neque impedit autem nemo sint adipisci dolore ipsam
                            magni, veritatis sequi sapiente similique voluptate nostrum vero
                            culpa. Quos, molestiae aperiam alias cum magnam minima! Natus
                            voluptate dolore nulla necessitatibus fugiat laudantium.
                        </span>
                    </motion.div>
                ) : (
                    ''
                )}
            </AnimatePresence>
        </div>
    );
};

export default Accordion;
