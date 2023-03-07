import React from 'react'
import Card from '../component/Card'
import TransitionPage from '../component/TransitionPage'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <TransitionPage>
      <motion.div className='div2 flex flex-wrap gap-10 justify-center  mt-10 py-3'>
        {
          new Array(8).fill(1).map((_, index) => {
            return <Card key={index}/>
          })
        }
      </motion.div>
            <div className="bg-purple-800 px-4 py-3  text-white  h-[130px] rounded-xl">
        <div className="w-5 h-4 ">
        <img src="https://cdn-icons-png.flaticon.com/512/2582/2582606.png" className="hover:bg-red-600"  alt="telegram" /><br />
        <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png " className="hover:bg-red-600"  alt="instagram" /><br />
        <img src="https://cdn-icons-png.flaticon.com/512/87/87421.png"  className="hover:bg-red-600" alt="youtube" />
        </div>
        <div className="ml-7 mt-[-22px]  ">
        <p>https://api.lorem.space/image/pizza</p><br />
        <p>https://api.lorem.space/image/pizza</p><br />
        <p>https://api.lorem.space/image/pizza</p>
        </div>
        <div className="flex w-[500px] ml-[450px] mt-[-100px]">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magni dolor, voluptate id molestias aperiam iure necessitatibus ipsam sint repudiandae, porro dolore vitae accusamus minima.</p>
        </div>
        <div className="flex ml-[999px] mt-[-93px] gap-9">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Xorazm_Viloyati_in_Uzbekistan.svg/640px-Xorazm_Viloyati_in_Uzbekistan.svg.png" className=" w-[150px] h-[120px] " />
        <img src="https://mapsoid.ru/_pu/30/06162502.jpg" className=" w-[150px] h-[120px] " />
        </div>
      </div>
    </TransitionPage>
  )
}

export default About