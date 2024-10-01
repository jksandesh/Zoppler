import React from 'react'
import {card, radar3_bg, radar9_bg} from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const RadarSubsystems = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Radar Subsystems {/*<br className='sm:block hidden'/>in few easy steps.*/}</h2>
          <p className={`${styles.paragraph} max-w-[620px] mt-5`}>
              1. Transmit-Receive Modules <br/>
              2. Phased Array Antennas for Radar <br/>
              3. Tiled-Array Antennas for Radar <br/>
              4. FPGA/SoC Embedded Hardware and Firmware for Radar <br/>
              5. Ultra Wideband, Direct Sampling Receiver and Exciter for Radar <br/>
              6. Multi Channel RFSoC/Transceiver based solutions for Radar <br/>
              7. Single Board Embedded computers Intel, Nvidia & ARM for Radar <br/>
              8. State-of-the-art Antenna Embedded Radiator for Radar <br/>
          </p>
          <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={radar3_bg}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default RadarSubsystems
