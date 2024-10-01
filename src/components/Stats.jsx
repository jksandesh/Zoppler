import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (

      <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        <p className='font-poppins font-normal xs:text-[25px] text-[25px] xs:leading-[25px] leading-[25px] text-cyan-50 ml-3 mr-20'>Industries Catered</p>
        {stats.map((stat) => (
            <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
              <img
                  src={stat.icon}
                  alt='icon'
                  className='w-[20%] h-[20%] object-contain'
              />
              <p className='font-poppins font-normal xs:text-[25px] text-[25px] xs:leading-[35px] leading-[35px] text-gradient uppercase ml-3'>{stat.title}</p>
            </div>
        ))}
      </section>
  )
}

export default Stats
