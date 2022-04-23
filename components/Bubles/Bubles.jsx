import React, {useState, useEffect} from 'react'
import styles from './Bubles.module.scss'

function Bubles({ count, height, width }) {
    const [bubles, setBubles] = useState(Array.from(Array(count).keys()))
    const [coords, setCoords] = useState([])
    const sizes = ['10px', '20px', '25px']

   

  useEffect(() => {

    Promise.all(
      bubles.map(() => ({
        x: Math.floor(Math.random() * width) + 'px',
        y: Math.floor(Math.random() * height) + 'px',
        size: Math.floor(Math.random() * sizes.length)
      }))
    ).then(data => setCoords(data))

  },[])


  return (
    <div style={{width: width, height: height, position: 'relative', marginLeft: 'auto'}}>
      {coords.map((item, key) => {
        return (
          <div
            key={key}
            className={`${styles[`pulse-${Math.floor(Math.random() * sizes.length)}`]} bg-white rounded-full blur-sm`}
            style={{
              bottom: item.x,
              left: item.y,
              height: sizes[item.size],
              width: sizes[item.size],
              position: 'absolute',
            }}
          >
            {' '}
          </div>
        )
      })}
    </div>
  )
}

export default Bubles
