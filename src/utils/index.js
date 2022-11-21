import { useEffect } from "react"
import "./index.css"

const Container = (props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  )
}

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div onClick={scrollToTop} className="back-to-top">
      <span>Back to top</span>
    </div>
  )
}

const Overlay = ({setIsSidebarOpen}) => {
  return(
    <div onClick={() => {setIsSidebarOpen(false)}} className="overlay"></div>  
  )
}

export { Container, BackToTop, Overlay }
