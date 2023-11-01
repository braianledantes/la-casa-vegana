import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(12)

  return (
    <>
      <NavBar cartCount={count} />
      <ItemListContainer />
    </>
  )
}

export default App
