import { useState } from 'react'
import './App.css'
import floating from "@/components/ui/floating"

function App() {
  const [count, setCount] = useState(0)

  return (
    <floating/>
  )
}

export default App
