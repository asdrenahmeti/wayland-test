import React from 'react'
import styles from './HomeHero.module.scss'

function HomeHero() {
  return (
    <>
      <div className={styles.circle}></div>
      <div className={styles.circle2}></div>

      <svg className={styles.test}>
        <filter id="wave">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.009"
            numOctaves="5"
            seed="2"
          >
            <animate
              attributeName="baseFrequency"
              dur="30s"
              values="0.02;0.005;0.02"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="30" />
        </filter>
      </svg>
    </>
  )
}

export default HomeHero
