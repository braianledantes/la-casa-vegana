import { useState } from 'react'
import './App.css'
import { MainLayout } from './layout'
import { Home } from './pages/Home'

function App() {
  const [count, setCount] = useState(12)

  return (
    <MainLayout cartCount={count}>
      <Home />
    </MainLayout>
  )
}

export default App
