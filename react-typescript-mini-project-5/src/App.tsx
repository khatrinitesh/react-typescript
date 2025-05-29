import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    function handleScroll(){
     setIsSticky(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  return (
    <>
      <div className={`mainLayout ${isSticky ? 'sticky' : ''}`} style={{
        height: "200vh"
      }}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
