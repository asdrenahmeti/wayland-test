import React from 'react'

function Section({ children, style }) {
  return <div className={`${style} text-blue snap-end `}>
    {children}
  </div>
}

export default Section