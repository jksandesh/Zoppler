import React from 'react'
import {apple, bill, google, radar, radar1_bg, radar9_bg} from '../assets'
import styles, { layout } from '../style'
import Button from "./Button.jsx";

const SoftwareComponents = () => {
    return (
        <section id='product' className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
                <img
                    src={radar9_bg}
                    alt='billing'
                    className='w-[90%] h-[90%] relative z-[5]'
                />
                <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
                <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
            </div>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Software Products {/*<br className='sm:block hidden'/> billing & invoicing.*/}</h2>
                <p className={`${styles.paragraph} max-w-[470px] whitespace-pre mt-5`}>
                    1. Radar Signal Processor (RSP/DSP) <br/>
                    2. Radar Data Processor (RDP) <br/>
                    3. GIS Based 3D Radar Visualization Software <br/>
                    4. 6 DoF Aircraft and Weapon Simulation <br/>
                    5. Data Recorder and Analyzer (DRA) <br/>
                    6. AI enabled Object Tracking and Classification <br/>
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

export default SoftwareComponents
