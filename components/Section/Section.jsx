import React from 'react'

function Section({ children, style }) {
  return <div className={`${style} text-blue snap-end lg:h-screen`}>
    {children}
  </div>
}

export default Section