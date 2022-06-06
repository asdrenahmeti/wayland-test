import React, {useState} from 'react'
import styles from './Draggable.module.scss'
import {FaArrowsAltV } from 'react-icons/fa'

const Draggable = (props) => {
  // const [canMove, setCanMove] = useState(false);
  const [y, setY] = useState(700)
  const [location, setLocation] = useState({ y: -9999 })

  const onMouseMove = event => {
    event.preventDefault()
    if (location.y == -9999) {
      return
    }
    setY(event.pageY - location.y)
  }
  const onMouseUp = event => {
    event.preventDefault()
    setLocation({ y: -9999 })
  }
  const onMouseDown = event => {
    event.preventDefault()
    setLocation({ y: event.pageY - y })
  }

  return (
    <div className={styles.root}>
      <div className={styles.appBar}></div>
      <div
        className={styles.fDiv}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        <div className={styles.sDiv} style={{ height: y }}>
          {props.children}
        </div>
        <div
          className={styles.btn}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          style={{ top: y }}
        >
          <FaArrowsAltV
            style={{
              color: 'white',
              fontSize: 40,
              position: 'relative',
              top: '-20px',
              boxSizing: 'border-box',
              backgroundColor: '#FF5353',
              borderRadius: '100%',
              padding: 10
            }}
          ></FaArrowsAltV>
        </div>
      </div>
    </div>
  )
}

export default Draggable
