import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<h1>Hello, World!</h1>} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
