import { useState } from 'react'
import Container from '../../components/Container/Container'
import Section from '../../components/Section/Section'

function Career() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Section style="pt-28 md:h-screen">
        <Container style="flex flex-col gap-0 h-full items-center justify-center xl:flex-row xl:gap-5">
          <p className="text-center sm:w-[400px] md:mb-10 lg:w-[400px] lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            etiam ante enim tincidunt a, dolor diam pulvinar. Vestibulum augue
            imperdiet semper fusce at purus elit ullamcorper. Vitae nunc
            placerat quam risus ac. Eget viverra pellentesque habitasse nisl
            felis cras hendrerit integer nec. Quam ac risus nec sed nisi.
          </p>

          <div className="flex flex-col items-center gap-8 relative -top-40">
            <p className="hidden xl:block lg:w-full whitespace-nowrap font-source text-sm uppercase font-semibold text-w-gray lg:-rotate-90">
              Apply Now
            </p>
            <div className="hidden xl:block w-0.5 h-11 bg-w-red"></div>
          </div>

          <h1 className="text-center pt-6 lg:pt-0 lg:text-left font-mulish font-bold text-5xl">
            COME, <br /> JOIN US
          </h1>

          <div className="flex flex-col gap-1 relative -top-56">
            <div className="w-2.5 h-2.5 bg-w-orange rounded-full cursor-pointer"></div>
            <div className="w-2.5 h-2.5 bg-w-red rounded-full cursor-pointer"></div>
            <div className="w-2.5 h-2.5 bg-w-red rounded-full cursor-pointer"></div>
          </div>

          <div className="flex flex-col gap-10 md:flex-row">
            <div className="flex flex-col gap-4 items-center">
              <div className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] bg-red-300 rounded-full"></div>
              <div className="flex flex-col text-center gap-2 w-full sm:max-w-[400px] md:text- lg:text-left">
                <h3 className="font-mulish text-md font-bold">HEY, IM BEN</h3>
                <p className="w-full text-sm lg:w-[360px] ">
                  My team needs a{' '}
                  <span className="font-bold text-tertiary">
                    Junior Developer
                  </span>{' '}
                  in NodeJS, if you like challanges and want to learn more, we
                  are more than happy to make you a place.
                </p>

                <a onClick={() => setShowModal(true)} className="underline text-center text-w-red font-source text-sm cursor-pointer lg:text-right">
                  apply here
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <div className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] bg-red-300 rounded-full"></div>
              <div className="flex flex-col text-center gap-2 w-full sm:max-w-[400px] lg:text-left">
                <h3 className="font-mulish text-md font-bold">HEY, IM BEN</h3>
                <p className="w-full text-sm lg:w-[360px] ">
                  My team needs a{' '}
                  <span className="font-bold text-tertiary">
                    Junior Developer
                  </span>{' '}
                  in NodeJS, if you like challanges and want to learn more, we
                  are more than happy to make you a place.
                </p>

                <a className="underline text-center text-w-red font-source text-sm cursor-pointer lg:text-right">
                  apply here
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {showModal && (
        <Section style="transition-opacity ease-in-out delay-150 opacity-100 h-screen p-0 absolute w-full bg-white top-0">
          <Container style="flex h-full relative ">
            <h1
              onClick={() => setShowModal(false)}
              className="text-3xl font-bold absolute right-0 top-32 cursor-pointer text-primary"
            >
              X
            </h1>

            <div className="w-1/2 flex h-full items-center">
              <div className="w-1 h-4/6 bg-w-red"></div>
              <div className="w-full text-center flex flex-col">
                <h1 className="font-source text-8xl font-black text-w-gray">
                  Join
                </h1>
                <h1 className="font-source text-8xl font-black text-w-gray">
                  Join
                </h1>
                <h1 className="font-source text-8xl font-black text-w-red">
                  Join
                </h1>
                <h1 className="font-source text-8xl font-black text-w-gray">
                  Join
                </h1>
                <h1 className="font-source text-8xl font-black text-w-gray">
                  Join
                </h1>
              </div>
            </div>
            <div className="w-1/2 flex h-full items-start flex-col font-source justify-center pl-20 ">
              <h1 className="text-4xl font-semibold mb-3">Senior Developer</h1>
              <p className="text-lg font-bold">
                Senior Developer Responsibilities
              </p>
              <ul className="list-disc list-inside text-md flex flex-col gap-1 ml-5">
                <li>Performing coding</li>
                <li>Performing coding assignments</li>
                <li>Creating and implementing design plans.</li>
                <li>Analyzing code segments regularly.</li>
                <li>Delegating tasks to team members.</li>
              </ul>

              <p className="text-lg font-bold mt-5">
                Senior Developer Requirements
              </p>
              <ul className="list-disc list-inside text-md flex flex-col gap-1 ml-5">
                <li>Degree in information technology, computer science</li>
                <li>Strong knowledge of Javascript, C++, PHP, and SQL.</li>
                <li>Solid experience in coding.</li>
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
          </Container>
        </Section>
      )}
    </>
  )
}

export default Career
