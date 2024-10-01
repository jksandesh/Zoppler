import React from 'react'
import {apple, bill, google, radar, radar1_bg, radar9_bg} from '../assets'
import styles, { layout } from '../style'
import Button from "./Button.jsx";

const RadarsAndLaunchers = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={radar1_bg}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Radars and Launchers {/*<br className='sm:block hidden'/> billing & invoicing.*/}</h2>
        <p className={`${styles.paragraph} max-w-[470px] whitespace-pre mt-5`}>
          1. Ultra Compact Radar for Drone Detection <br/>
          2. Fire control and Multifunction Radars <br/>
          3. Active Radar Seeker for precision guided missile <br/>
          4. Long range surveillance radars and Airborne radars <br/>
          5. Doppler weather radar <br/>
          6. Closed loop control systems for Launcher Deployment mechanisms <br/>
          7. Relay and Solid State power controllers <br/>
        </p>
        <Button styles='mt-10'/>
        {/*<div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img
            src={apple}
            alt='app-store'
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
          />
          <img
            src={google}
            alt='google-play'
            className='w-[128px] h-[42px] object-contain cursor-pointer'
          />
        </div>*/}
      </div>  
    </section>
  )
}

export default RadarsAndLaunchers
