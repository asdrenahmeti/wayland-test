/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import styles from './MainSlider.module.scss'
import Image from 'next/image'


const data = [
  [
    {
      title: 'Shkumbin',
      image:
        'https://images.unsplash.com/photo-1652835806001-78c01541a265?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=140',
      description:
        'morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean'
    },
    {
      title: 'Asdren',
      image:
        'https://images.unsplash.com/photo-1652845983031-4981f42de9dd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=140',
      description:
        'morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean'
    }
  ],
  [
    {
      title: 'Gzim',
      image:
        'https://images.unsplash.com/photo-1652845983031-4981f42de9dd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=140',
      description:
        'morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean'
    },
    {
      title: 'Vardona',
      image:
        'https://images.unsplash.com/photo-1652835806001-78c01541a265?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=140',
      description:
        'morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean'
    }
  ],
  [
    {
      title: 'Vardona',
      image:
        'https://images.unsplash.com/photo-1652835806001-78c01541a265?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=140',
      description:
        'morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean'
    },
    {
      title: 'Shkumbin',
      image:
        'https://images.unsplash.com/photo-1652835806001-78c01541a265?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=140',
      description:
        'morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean'
    }
  ]
]

function MainSlider({showModal}) {
  const [index, setIndex] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [jobs, setJobs] = useState(data)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index => (index <= jobs.length -2 ? index+1 : 0))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.sliderWrapper}>
      {jobs.map((arr, i) => {
        return (
          <div
            key={i}
            className={styles.parent}
            style={{ zIndex: index === i ? 100 : 1, opacity: index === i ? 1 : 0}}
          >
            <div className={styles.dotsContainer}>
              {jobs.map((dot, index) => {
                return <div key={index}  style={{ backgroundColor: index === i ? "orangered" : "orange"}}></div>
              })}
            </div>
            <div className={styles.child}>
              <div className={styles.imgContainer}>
                <Image
                  src={arr[0].image}
                  alt="profile pic"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div className={styles.content}>
                <h1>{arr[0].title}</h1>
                <p>{arr[0].description}</p>
              </div>
              <h1 className={styles.applyBtn}>
                  <a className="underline text-center text-w-red font-source text-sm cursor-pointer lg:text-right"  onClick={()=>showModal(true)}>
                    apply here
                  </a>
              </h1>
            </div>
            <div className={styles.child}>
              <div className={styles.imgContainer}>
                <Image
                  src={arr[1].image}
                  alt="profile pic"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div className={styles.content}>
                <h1>{arr[1].title}</h1>
                <p>{arr[1].description}</p>
              </div>
              <h1 className={styles.applyBtn}>
                  <a className="underline text-center text-w-red font-source text-sm cursor-pointer lg:text-right" onClick={()=>showModal(true)}>
                    apply here
                  </a>
              </h1>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MainSlider
