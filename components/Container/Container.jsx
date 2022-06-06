function Container({ style, children }){
  return <div className={`${style} xs:px-4 max-w-[1400px] container mx-auto`}>{children}</div>
}

export default Container
