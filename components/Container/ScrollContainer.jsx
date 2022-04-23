import React from 'react'

function ScrollContainer({children}) {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      {children}
    </div>
  )
}

export default ScrollContainer