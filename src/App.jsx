import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/HomePage'
import BlogPage from './pages/BlogPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/blog" element={<BlogPage/>}/>
    </Routes>
  )
}

export default App