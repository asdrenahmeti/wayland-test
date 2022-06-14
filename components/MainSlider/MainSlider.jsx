/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import styles from './MainSlider.module.scss'
import Image from 'next/image'
import CareerOne from "./../../public/assets/images/career-1.png"
import CareerTwo from './../../public/assets/images/career-2.png'
import { IoChevronForwardSharp } from 'react-icons/io5'


const data = [
  [
    {
      title: "Hey, I'm Ben",
      image: CareerOne,
      description:
        'My team needs a Junior Developer in NodeJS, if you like challanges and want to learn more, we are more than happy to make you a place.'
    },
    {
      title: "Hey You, Don't see a perfect fit?",
      image: CareerTwo,
      description:
        'We are always growing and sometimes we are growing so fast that we start by reaching out to those who have pre applied before opening up a position to new applicants. '
    }
  ],
  [
    {
      title: "Hey, I'm Ben",
      image:
        'https://images.unsplash.com/photo-1652845983031-4981f42de9dd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=140',
      description:
        'My team needs a Junior Developer in NodeJS, if you like challanges and want to learn more, we are more than happy to make you a place.'
    },
    {
      title: "Hey You, Don't see a perfect fit?",
      image:
        'https://images.unsplash.com/photo-1652835806001-78c01541a265?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=140',
      description:
        'We are always growing and sometimes we are growing so fast that we start by reaching out to those who have pre applied before opening up a position to new applicants. '
    }
  ],
  [
    {
      title: "Hey, I'm Ben",
      image:
        'https://images.unsplash.com/photo-1652835806001-78c01541a265?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=140',
      description:
        'My team needs a Junior Developer in NodeJS, if you like challanges and want to learn more, we are more than happy to make you a place.'
    },
    {
      title: "Hey You, Don't see a perfect fit?",
      image:
        'https://images.unsplash.com/photo-1652835806001-78c01541a265?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=140',
      description:
        'We are always growing and sometimes we are growing so fast that we start by reaching out to those who have pre applied before opening up a position to new applicants. '
    }
  ]
]

function MainSlider({showModal}) {
  const [index, setIndex] = useState(0)
  const [jobs, setJobs] = useState(data)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index => (index <= jobs.length -2 ? index+1 : 0))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.sliderWrapper}>
      {jobs.map((arr, i) => {
        return (
          <div
            key={i}
            className={styles.parent}
            style={{
              zIndex: index === i ? 100 : 1,
              opacity: index === i ? 1 : 0
            }}
          >
            <div className={styles.dotsContainer}>
              {jobs.map((dot, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: index === i ? 'orangered' : 'orange'
                    }}
                  ></div>
                )
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
                <h1 className="font-semibold font-mulish">{arr[0].title}</h1>
                <p className="font-source text-primary">{arr[0].description}</p>
              </div>
              <h1 className={styles.applyBtn}>
                <a
                  className="underline text-center text-w-red font-source text-sm cursor-pointer lg:text-right"
                  onClick={() => showModal(true)}
                >
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
                <h1 className="font-semibold font-mulish text-md">
                  {arr[1].title}
                </h1>
                <p className="font-source text-primary">{arr[1].description}</p>
              </div>
              <h1 className={styles.applyBtn}>
                <a
                  className="underline text-center text-w-red font-source text-sm cursor-pointer lg:text-right"
                  onClick={() => showModal(true)}
                >
                  apply here
                </a>
              </h1>
            </div>
            <div className="block w-full flex justify-end pr-4 pb-2">
            <IoChevronForwardSharp className="text-4xl text-right text-w-red"></IoChevronForwardSharp>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MainSlider
