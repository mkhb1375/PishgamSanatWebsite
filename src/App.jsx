import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './body'
import Header from './header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    <Body/>
    </>
  )
}

export default App
