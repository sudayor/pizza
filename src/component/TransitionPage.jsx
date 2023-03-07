import React from 'react'
import { motion } from 'framer-motion'

const variants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transtion: {
            type: 'spring',
            bounce: 0.8,
            duration: 1,
        }
    }
}

const TransitionPage = ({ children }) => {
    return (
        <motion.div
            initial='hidden'
            animate="visible"
            exit='hidden'
            variants={variants}
        >
            {children}
        </motion.div>
    )
}

export default TransitionPage