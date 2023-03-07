import React from 'react'
import {motion} from 'framer-motion'

const Card = () => {
    return (
        <motion.div initial={{
            opacity: 0
        }} 
        whileInView={{
            opacity: 1,
        }}
        viewport={{
            once: true,
            amount: 0.8,
        }}
        className='w-[300px] mx-auto  p-4 border rounded-md shadow-md bg-black font-bold text-white min-[320px]:text-center max-[600px]'>
            <img className='flex justify-self-center h-[200px] w-[200px] object-cove rounded-full min-[320px]:text-center max-[600px]' src="https://api.lorem.space/image/pizza" alt="" />
            <h4 className='text-xl text-center my-4 italic'>Pizza</h4>
            <p className='text-start text-xl text-white min-[320px]:text-center max-[600px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum odio odit excepturi quasi fugit, ullam distinctio, sit, molestias adipisci commodi ist!</p>
            <div className='flex justify-center'>
            <button className=' w-[55px] border px-2 py-1 hover:bg-red-500  border-red-600 text-white font-semibold rounded-full'><a href="/BuyNow"> Buy</a></button>
            </div>
        </motion.div>
    )
}

export default Card