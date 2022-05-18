import React from 'react'
import styles from './Particles.module.scss'

function Particles({quantity}) {
  return (
    <div id="particle-container" style={{position: 'relative'}}>
      {[...Array(quantity)].map((item, index) => (
        <div className={styles.particle} key={index}></div>
      ))}
    </div>
  )
}

export default Particles