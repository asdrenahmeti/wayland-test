function Container({ style, children }) {
  return (
    <div className={`${style} px-[15px] xs:px-4 lg:px-32 container mx-auto`}>
      {children}
    </div>
  )
}

export default Container
