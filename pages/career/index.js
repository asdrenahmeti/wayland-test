import React, { useRef, useEffect } from 'react'
import Container from '../../components/Container/Container'
import Section from '../../components/Section/Section'

function Career() {
  const slider = useRef<HTMLDivElement>(null)

  useEffect(() => {
      console.log(slider.current)
  }, [])

  return (
    <>
      <Section style="h-screen">
        <Container style="flex h-full items-center justify-center gap-20">
          <p className="w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            etiam ante enim tincidunt a, dolor diam pulvinar. Vestibulum augue
            imperdiet semper fusce at purus elit ullamcorper. Vitae nunc
            placerat quam risus ac. Eget viverra pellentesque habitasse nisl
            felis cras hendrerit integer nec. Quam ac risus nec sed nisi.
          </p>

          <div className="flex flex-col items-center gap-8 relative -top-40">
            <p className="-rotate-90 w-full whitespace-nowrap font-source text-sm uppercase font-semibold text-w-gray ">
              Apply Now
            </p>
            <div className="w-0.5 h-11 bg-w-red"></div>
          </div>

          <h1 className="font-mulish font-bold text-5xl">
            COME, <br /> JOIN US
          </h1>

          <div className="flex flex-col gap-10">
            <div className="flex gap-4 items-center">
              <div className="w-[150px] h-[150px] bg-red-300 rounded-full"></div>
              <div className="flex flex-col gap-2">
                <h3 className="font-mulish text-md font-bold">HEY, I'M BEN</h3>
                <p className="w-[360px] text-sm">
                  My team needs a{' '}
                  <span className="font-bold text-tertiary">
                    Junior Developer
                  </span>{' '}
                  in NodeJS, if you like challanges and want to learn more, we
                  are more than happy to make you a place.
                </p>

                <a className="underline text-w-red text-right font-source text-sm cursor-pointer">
                  apply here
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-[150px] h-[150px] bg-red-300 rounded-full"></div>
              <div className="flex flex-col gap-2">
                <h3 className="font-mulish text-md font-bold">HEY, I'M BEN</h3>
                <p className="w-[360px] text-sm">
                  My team needs a{' '}
                  <span className="font-bold text-tertiary">
                    Junior Developer
                  </span>{' '}
                  in NodeJS, if you like challanges and want to learn more, we
                  are more than happy to make you a place.
                </p>

                <a className="underline text-w-red text-right font-source text-sm cursor-pointer">
                  apply here
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section style="h-screen p-0">
        <Container style="flex h-full">
          <div className="w-1/2 flex h-full items-center">
            <div className="w-1 h-4/6 bg-w-red"></div>
            <div ref={slider} className="w-full text-center flex flex-col">
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
              <span className="text-w-red font-semibold">info@wayland.io</span>
            </p>

            <button className="bg-w-red text-white font-bold text-xl px-10 py-5 mt-5">
              contact@wayland.io
            </button>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Career
