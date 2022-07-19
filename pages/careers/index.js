import { useState, useEffect } from 'react'
import Container from '../../components/Container/Container'
import Section from '../../components/Section/Section'
import styles from '../../styles/Career.module.scss'
import SwiperCareer from '../../components/SwiperCareer/SwiperCareer'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

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
      <Section style="pt-32 pb-16 lg:h-screen flex lg:pt-44 relative overflow-hidden">
        <Container style="flex flex-col lg:items-center relative lg:justify-between lg:flex-row relative overflow-hidden">
          <div className="relative flex-1 order-2 lg:max-w-[500px]">
            <p className="font-source text-primary tracking-tighter lg:order-1 pr-[15px]">
              At Wayland, you are part of a world class innovation team from
              your first day. We provide a collaborative working space with
              support, mentoring, and guidance as you grow in your career. We
              are also creative, high-performing community both inside - and
              outside - of the office. We care about each other and the cities
              where we live. You can make a difference here. Interested?
            </p>
            <div className="absolute origin-top-right -top-[30px] right-[10px] -translate-y-[100%] -rotate-90 lg:rotate-0 lg:right-[50px]">
              <SectionTitle title="Our team" />
            </div>
          </div>

          {/* <div className="relative w-[100px] flex justify-center items-center">
          </div> */}

          {/* <div className="lg:hidden mb-4 z-[100]">
            <SectionTitle title="Our team" />
          </div> */}

          <div className="order-1 font-mulish font-bold lg:text-center mb-4 lg:mb-0 uppercase text-3xl lg:order-2">
            Come <br />
            Join us
          </div>

          {/* <MainSlider showModal={setShowModal} /> */}
          <div className="order-4 w-full lg:max-w-[500px] mb-6">
            <SwiperCareer openModal={setShowModal}></SwiperCareer>
          </div>
        </Container>
      </Section>

      {showModal && (
        <div className={`${styles.modalSectionWrapper} scrollbar-hide`}>
          <h1
            onClick={() => setShowModal(false)}
            className={styles.closeModalBtn}
          >
            X
          </h1>
          <div className={styles.modalSection}>
            <div
              className={`${styles.modalLine} ${
                showModal ? styles.show : false
              }`}
            ></div>
            <div className="hidden sm:flex w-3/5 md:w-1/2 h-full flex-col justify-evenly">
              {Array.from(new Array(9), (val, i) => {
                return (
                  <h1
                    key={i}
                    className="pl-2 md:pl-16 font-source text-8xl md:text-9xl font-black text-w-gray text-center"
                    style={{
                      color: index === i ? '#FF5353' : 'rgba(132,132,131, 0.2)'
                    }}
                  >
                    Join
                  </h1>
                )
              })}
            </div>
            <div
              className={`${styles.applyDetails} pt-[15px] overflow-y-scroll pl-[22px] pr-[10px] sm:pl-0 w-full z-10 md:w-1/2 flex h-full flex-col font-source justify-center `}
            >
              <h1 className="font-source text-xl font-bold lg:text-3xl">
                Senior Developer
              </h1>

              <h3 className="font-source text-base font-bold my-[16px]">
                Senior Developer Responsibilities
              </h3>
              <ul className="ml-[10px] list-disc font-light">
                <li>Reviewing code work for accuracy and functionality.</li>
                <li>Creating and implementing design plans. </li>
                <li>Analyzing code segments regularly.</li>
                <li>
                  Performing coding assignments. Delegating tasks to team
                  members.
                </li>
              </ul>

              <h3 className="font-source text-base font-bold my-[16px]">
                Senior Developer Requirements
              </h3>
              <ul className="ml-[10px] list-disc font-light">
                <li>
                  Degree in information technology, computer science Strong
                  knowledge of Javascript, C++, PHP, and SQL.
                </li>
                <li>Solid experience in coding.</li>
                <li> Strong knowledge of user interfaces.</li>
                <li>
                  Strong knowledge of HTML and web frameworks. Good
                  communication skills.
                </li>
                <li>Good time management skills.</li>
              </ul>

              <p className="mt-[10px] text-sm lg:mt-[20px]">
                Send the CV at
                <span className="text-w-red"> info@wayland.io</span> or apply
                here.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Career
