function Container({ style, children }){
  return <div className={`${style} xs:px-4 container mx-auto`}>{children}</div>
}

export default Container
