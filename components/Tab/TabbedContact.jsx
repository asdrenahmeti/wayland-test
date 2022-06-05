import React, { useEffect, useState } from 'react'
import TabbedLocations from './TabbedLocations'

function TabbedContact() {
  const [location, setLocations] = useState(TabbedLocations)
  const [value, setValue] = useState(1)

  const { name, info } = location[value]

  return (
    <>
      <div className="font-source my-4 flex w-full justify-between">
        {location.map((item, index) => {
          return (
            <h1
              key={index}
              className={`text-lg cursor-pointer font-semibold inline-block" ${
                index === value && 'mb-1 border-b-2 border-w-red'
              }`}
              onClick={() => setValue(index)}
            >
              {item.name}
            </h1>
          )
        })}
      </div>

      <div className="font-light font-source text-base">
        {info.map((item, index) => {
          return <p key={index + 'loc'}>{item}</p>
        })}
      </div>
    </>
  )
}

export default TabbedContact
