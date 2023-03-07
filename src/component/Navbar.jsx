import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const navVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}
const childVariants = {
    hidden: {
        opacity: 0,
        y: -20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            type: 'spring',
            bounce: 0.2
        }
    }
}

const Navbar = () => {
    return (
        <motion.nav variants={navVariants} initial='hidden' animate="visible" className=' px-8 text-white container mx-auto py-6 flex justify-between items-center border-b-2'>
            <motion.a variants={childVariants} className='text-3xl font-semibold' href="#">🍕PIZZA</motion.a>
            <motion.ul className='flex gap-6'>
                <motion.li variants={childVariants}>
                    <Link className='text-xl hover:text-black transition-all items-center' to='/'>🏚Home</Link>
                </motion.li>
                <motion.li variants={childVariants}>
                    <Link className='text-xl hover:text-black transition-all' to='about'>About Us</Link>
                </motion.li>
                <motion.li variants={childVariants}>
                    <Link className='text-xl hover:text-black transition-all items-center' to='/buynow'>🛒Buy Now</Link>
                </motion.li>
            </motion.ul>
        </motion.nav>
    )
}

export default Navbar