import React from 'react'
import Section from '../../components/Section/Section'
import Image from 'next/image'
import Container from '../../components/Container/Container'
import Button from '../../components/Button/Button'
import TabbedContact from '../../components/Tab/TabbedContact'
import ContactAnimation from '../../components/ContactAnimation/ContactAnimation'
import ContactAnimationSvg from '../../public/assets/contact-animation.svg'

function Connect() {
  return (
    <>
      <Section style={'flex pt-24 md:h-auto lg:py-48 lg:h-screen'}>
        <Container
          style={'flex flex-col md:flex-row md:gap-24 md:items-center'}
        >
          <div className="mb-4 flex items-center sm:mx-auto">
            <ContactAnimation
              firstPhrase="hear"
              secondPhrase="from"
              type="light"
            ></ContactAnimation>
            <div className="hidden sm:block md:hidden">
              <Image
                src={ContactAnimationSvg}
                alt="Rotating circles animation"
              ></Image>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="md:flex sm:hidden sm:justify-end ">
              <Image
                src={ContactAnimationSvg}
                alt="Rotating circles animation"
              ></Image>
            </div>

            <h1 className="font-mulish text-lg font-bold uppercase">Wayland</h1>
            <div className="w-[100%] h-[2px] bg-w-primary"></div>

            <div className="grid grid-rows-2 grid-cols-4 sm:grid-rows-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="col-span-2 md:col-span-4 lg:col-span-2 font-source font-light pr-16">
                <p className="md:mb-4 max-w-[300px]">
                  As a global innovation firm, Wayland values partnership with
                  like-minded companies. Please contact us to learn more about
                  how we can build your next system, or ways we can invest
                  together in new innovation.
                </p>
              </div>
              <div className="col-span-2 flex flex-col justify-end font-source font-bold lg:max-w-[380px]">
                <ul className="flex justify-between">
                  <li className="w-[40px]">US</li>
                  <li>+1 456 841 7484</li>
                  <li>info@wayland.io</li>
                </ul>
                <ul className="flex justify-between">
                  <li className="w-[40px]">NMK</li>
                  <li>+389 75 123 432</li>
                  <li>info@wayland.io</li>
                </ul>
                <ul className="flex justify-between">
                  <li className="w-[40px]">RKS</li>
                  <li>+383 49 234 232</li>
                  <li>info@wayland.io</li>
                </ul>
              </div>
              <div className="col-span-4 text-center lg:text-left lg:col-span-1 font-source font-light mt-8 ">
                Contact our growth team at teams@wayland.io or use the form
                below.
              </div>
              <div className="col-span-4 mx-auto lg:col-span-3 flex lg:justify-end gap-2">
                <div className="border-r-[1px] border-[#848483] mt-8 px-3 md:px-0 lg:px-8">
                  <p className="font-source font-bold mb-4">US</p>
                  <ul className="text-sm font-light">
                    <li>Inform Innovation Inc</li>
                    <li>Austin, Texas</li>
                    <li>Texas, 78731</li>
                    <li>United States</li>
                  </ul>
                </div>
                <div className="mt-8 px-2 lg:pl-8 px-3 md:px-1 lg:px-8">
                  <p className="font-source font-bold mb-4">Skopje</p>
                  <ul className="text-sm font-light">
                    <li>Wayland Skopje</li>
                    <li>Orce Nikolov 190/3/6</li>
                    <li>Skopje, 1000</li>
                    <li>North Macedonia</li>
                  </ul>
                </div>
                <div className="border-l-[1px] border-[#848483] mt-8 md:pl-1 px-3 lg:px-8">
                  <p className="font-source font-bold mb-4">Prishtina</p>
                  <ul className="text-sm font-light">
                    <li>Wayland Prishtina</li>
                    <li>St. Garibaldi, 32/2</li>
                    <li>Prishtina 10000</li>
                    <li>Kosovo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:hidden">
            <div className="border-l ml-4 border-w-violet pl-4 py-2 sm:hidden">
              <h1 className="font-mulish font-bold text-2xl pb-2 text-primary">
                Let&apos;s make your project a reality
              </h1>
              <p className="font-source font-light text-base text-primary">
                Contact our growth team to setup a discovery call and explore
                how Wayland can help you scale faster.
              </p>
            </div>

            <p className="font-source text-base text-primary my-8">
              Feel free to reach out if you want to collaborate with us, or
              simply have a chat
            </p>

            <h1 className="uppercase font-semibold mb-4 font-source text-2xl">
              FIND AN OFFICE NEAR YOU
            </h1>

            <div className="xsl:hidden">
              <div className="font-source my-4">
                <h1 className="text-lg font-semibold mb-4 border-b-2 border-w-red inline-block">
                  North America
                </h1>

                <div className="font-light">
                  <p>Inform Innovation Inc</p>
                  <p>Austin, Texas</p>
                  <p>United States</p>
                  <p>Phone number: +1 456 841 7484</p>
                </div>
              </div>

              <div className="font-source my-4">
                <h1 className="text-lg font-semibold mb-4 border-b-2 border-w-red inline-block">
                  Macedonia
                </h1>

                <div className="font-light">
                  <p>Wayland Skopje</p>
                  <p>Orce Nikolov 190/3/6</p>
                  <p>Skopje, 1000</p>
                  <p>Phone number: +1 456 841 7484</p>
                </div>
              </div>

              <div className="font-source my-4">
                <h1 className="text-lg font-semibold mb-4 border-b-2 border-w-red inline-block">
                  Kosovo
                </h1>

                <div className="font-light">
                  <p>Wayland Prishtina</p>
                  <p>St. Garibaldi 32/2</p>
                  <p>Prishtina, 1000</p>
                  <p>Phone number: +383 49 234 232</p>
                </div>
              </div>
            </div>

            <div className="hidden xsl:block">
              <TabbedContact></TabbedContact>
            </div>
          </div>
        </Container>
      </Section>

      <Section
        style={'bg-primary text-white flex mt-8 md:h-screen md:items-center'}
      >
        <Container style={'flex w-[100%] md:justify-between md:items-center'}>
          <div className="hidden md:block">
            <ContactAnimation
              firstPhrase="work"
              secondPhrase="with"
            ></ContactAnimation>
          </div>
          <form className="flex flex-col gap-5 py-10 w-full md:w-[600px]">
            <div className="hidden border-l ml-4 border-w-violet pl-4 py-2 md:block md:border-white">
              <h1 className="font-mulish font-bold text-2xl pb-2 text-primary md:text-white">
                Let&apos;s make your project a reality
              </h1>
              <p className="font-source font-light text-base text-primary md:text-white">
                Contact our growth team to setup a discovery call and explore
                how Wayland can help you scale faster.
              </p>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="name"
                name="name"
                className="block pl-4 py-3 px-0 w-full text-sm text-secondary bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:text-white focus:ring-0 focus:border-[#FF5177] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute pl-5 text-md text-white uppercase dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="email"
                name="email"
                className="block pl-4 py-3 px-0 w-full text-sm text-secondary text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:text-white focus:ring-0 focus:border-[#FF5177] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute pl-5 text-md text-white uppercase dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                email
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <textarea
                name="message"
                className="block pl-4 resize-none h-32 py-3 px-0 w-full text-sm text-secondary text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:text-white focus:ring-0 focus:border-[#FF5177] peer"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute pl-5 text-md text-white uppercase dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
            <Button text="Work with us" link="" type="red"></Button>
          </form>
        </Container>
      </Section>
    </>
  )
}

export default Connect
