import React from 'react'
import Section from '../../components/Section/Section'
import Image from 'next/image'
import ContactPattern from './../../public/assets/images/contact-pattern.svg'
import Container from '../../components/Container/Container'
import Button from '../../components/Button/Button'
import TabbedContact from '../../components/Tab/TabbedContact'
import ContactAnimation from '../../components/ContactAnimation/ContactAnimation'
import ContactAnimationSvg from '../../public/assets/contact-animation.svg'


function Connect() {
  return (
    <>
      <Section style={'flex pt-24 md:h-screen'}>
        <Container
          style={'flex flex-col md:flex-row md:gap-24 md:items-center'}
        >
          <div>
            <ContactAnimation
              firstPhrase="hear"
              secondPhrase="from"
              type="dark"
            ></ContactAnimation>
          </div>
          <div className="hidden sm:block">
            <div className="hidden sm:flex sm:justify-end">
              <Image src={ContactAnimationSvg}></Image>
            </div>

            <h1 className="font-mulish text-lg font-bold uppercase">Wayland</h1>
            <div className="w-[100%] h-[2px] bg-w-primary"></div>

            <div className="grid grid-rows-2 grid-cols-4">
              <div className="col-span-2 font-source font-light pr-16">
                <p>
                  Weather you’re a client, potential partner, or just want to
                  know more about wayland. We will be happy to talk with you.
                </p>
              </div>
              <div className="col-span-2 flex-col font-source font-bold">
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
              <div className="col-span-1 font-source font-light mt-8">
                Feel free to reach out if you want to collaborate with us, or
                simply have a chat
              </div>
              <div className="border-r-[1px] border-[#848483] mt-8 px-8">
                <p className="font-source font-bold mb-4">US Office</p>
                <ul className="text-sm font-light">
                  <li>Inform Innovation Inc</li>
                  <li>Austin, Texas</li>
                  <li>Texas, 22300</li>
                  <li>Texas, 22300</li>
                </ul>
              </div>
              <div className="mt-8 pl-8 px-8">
                <p className="font-source font-bold mb-4">Skopje Office</p>
                <ul className="text-sm font-light">
                  <li>Wayland Skopje</li>
                  <li>Orce Nikolov 190/3/6</li>
                  <li>Skopje, 1000</li>
                  <li>North Macedonia</li>
                </ul>
              </div>
              <div className="border-l-[1px] border-[#848483] mt-8 px-8">
                <p className="font-source font-bold mb-4">Prishtina Office</p>
                <ul className="text-sm font-light">
                  <li>Wayland Prishtina</li>
                  <li>St. Garibaldi, 32/2</li>
                  <li>Prishtina 10000</li>
                  <li>Kosovo</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="sm:hidden">
            <div className="border-l ml-4 border-w-violet pl-4 py-2 sm:hidden">
              <h1 className="font-mulish font-bold text-2xl pb-2 text-primary">
                Let's make your project reality
              </h1>
              <p className="font-source font-light text-base text-primary">
                Weather you’re a client, potential partner, or just want to know
                more about wayland. We will be happy to talk with you.
              </p>
            </div>

            <p className="font-source text-base text-primary my-8">
              Feel free to reach out if you want to collaborate with us, or
              simply have a chat
            </p>

            <h1 className="uppercase font-semibold mb-4 font-source text-2xl">
              FIND AN OFFICE NEAR YOU
            </h1>

            <div className="xsm:hidden">
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

            <TabbedContact></TabbedContact>
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
                Let's make your project reality
              </h1>
              <p className="font-source font-light text-base text-primary md:text-white">
                Weather you’re a client, potential partner, or just want to know
                more about wayland. We will be happy to talk with you.
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
