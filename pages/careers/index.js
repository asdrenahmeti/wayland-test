import { useState, useEffect } from 'react'
import Container from '../../components/Container/Container'
import Section from '../../components/Section/Section'
import MainSlider from '../../components/MainSlider/MainSlider'
import styles from '../../styles/Career.module.scss'

function Career() {
  const [showModal, setShowModal] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index => (index <= 6 ? index + 1 : 0))
    }, 700)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <Section style="pt-32 lg:pt-44 h-screen flex">
        <Container style="flex flex-col items-start lg:flex-row justify-between min-h-800 lg:items-center">
          {/* <Container style="flex flex-col gap-0 h-full items-center justify-center xl:flex-row xl:gap-5"> */}
          <div className={styles.cardJoinUs}>
            <div className={styles.descriptionJoinUs}>
              <p className={styles.descriptionText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis iure maiores est fuga tempore delectus iste temporibus
                vitae! Debitis suscipit at eligendi hic fugit alias numquam ex
                id aut cum? Eget viverra pellentesque habitasse nisl felis cras
                hendrerit integer nec. Quam ac risus nec sed nisi.
              </p>
              <p className={styles.descriptionTitle}>
                <span></span> Apply Now
              </p>
            </div>
            <div className={styles.titleJoinUs}>
              Come, <br />
              Join us
            </div>
          </div>
          {/* <div className="flex flex-col items-center gap-8 relative -top-40">
            <p className="text-center sm:w-[400px] md:mb-10 lg:w-[400px] lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
              etiam ante enim tincidunt a, dolor diam pulvinar. Vestibulum augue
              imperdiet semper fusce at purus elit ullamcorper. Vitae nunc
              placerat quam risus ac. Eget viverra pellentesque habitasse nisl
              felis cras hendrerit integer nec. Quam ac risus nec sed nisi.
            </p>

            <p className="hidden xl:block lg:w-full whitespace-nowrap font-source text-sm uppercase font-semibold text-w-gray lg:-rotate-90">
              Apply Now
            </p>
            <div className="hidden xl:block w-0.5 h-11 bg-w-red"></div>
          </div>

          <h1 className="text-center pt-6 lg:pt-0 lg:text-left font-mulish font-bold text-5xl">
            COME, <br /> JOIN US
          </h1> */}

          <MainSlider showModal={setShowModal} />
        </Container>
      </Section>

      {showModal && (
        <div className={styles.modalSectionWrapper}>
          <div className={styles.modalSection}>
            <h1
              onClick={() => setShowModal(false)}
              className={styles.closeModalBtn}
            >
              X
            </h1>
            <div className={styles.modalLine}></div>
            <div className="hidden sm:flex w-1/5 md:w-1/2 h-full flex-col justify-evenly">
              {Array.from(new Array(7), (val, i) => {
                return (
                  <h1
                    key={i}
                    className="pl-2 md:pl-16 font-source text-7xl md:text-9xl font-black text-w-gray"
                    style={{
                      color: index === i ? 'orangered' : 'gray'
                    }}
                  >
                    Join
                  </h1>
                )
              })}
            </div>
            <div className="pl-0 w-4/5 md:w-1/2 flex h-full items-start flex-col font-source justify-center sm:pl-20 ">
              <h1 className="text-4xl font-semibold mb-3">Senior Developer</h1>
              <p className="text-lg font-bold whitespace-nowrap">
                Senior Developer Responsibilities
              </p>
              <ul className="list-disc list-inside text-md flex flex-col gap-1 ml-5">
                <li className="whitespace-nowrap">Performing coding</li>
                <li className="whitespace-nowrap">
                  Performing coding assignments
                </li>
                <li>Creating and implementing design plans.</li>
                <li className="whitespace-nowrap">
                  Analyzing code segments regularly.
                </li>
                <li className="whitespace-nowrap">
                  Delegating tasks to team members.
                </li>
              </ul>

              <p className="text-lg font-bold mt-5 whitespace-nowrap">
                Senior Developer Requirements
              </p>
              <ul className="list-disc list-inside text-md flex flex-col gap-1 ml-5">
                <li>Degree in information technology, computer science</li>
                <li>Strong knowledge of Javascript, C++, PHP, and SQL.</li>
                <li className="whitespace-nowrap">
                  Solid experience in coding.
                </li>
                <li>Strong knowledge of user interfaces.</li>
                <li>Strong knowledge of HTML and web frameworks.</li>
                <li>Good communication skills.</li>
                <li>Good time management skills.</li>
              </ul>

              <p className="mt-5 text-md">
                Send the CV at{' '}
                <span className="text-w-red font-semibold">
                  info@wayland.io
                </span>
              </p>

              <button className="bg-w-red text-white font-bold text-xl px-10 py-5 mt-5">
                contact@wayland.io
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Career