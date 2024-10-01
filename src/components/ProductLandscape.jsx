import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6  w-[600px] rounded-[20px] ${index !== features.length - 1 ? 'mb-2' : 'mb-0'} feature-card`}>
    <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[35%] h-[35%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins  font-semibold  text-white text-[20px] leading-[25px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[17px] whitespace-pre leading-[25px]'>
        {content}
      </p>
    </div>
  </div>
)

const ProductLandscape = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Product Landscape{/*, <br className='sm:block hidden'/>we'll handle the money.*/}</h2>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
            Generic modular, less size, high performance and cost effective Pulse-based
            AESA Radar system with an Embedded antenna array,
            Direct digital exciter-receiver module with zero IF technology,
            signal and data processing with advanced algorithms with an inbuilt scheduler.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={`${layout.sectionImg} flex-col items-start`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default ProductLandscape
