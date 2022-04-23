import React, {useState} from 'react'
import styles from './Draggable.module.scss'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'

const Draggable = (props) => {
  // const [canMove, setCanMove] = useState(false);
  const [y, setY] = useState(0)
  const [location, setLocation] = useState({ y: -9999 })

  const onMouseMove = event => {
    console.log('move..:', location)
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
          <BsFillArrowDownCircleFill style={{color: '#FF5076', fontSize: 40, position: 'relative', top: '-20px'}}></BsFillArrowDownCircleFill>
        </div>
      </div>
    </div>
  )
}

export default Draggable
