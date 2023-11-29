import './App.css'
import { CartProvider } from './context';
import { MainRouter } from './router/MainRouter';

function App() {
  return (
    <CartProvider >
      <MainRouter />
    </CartProvider>
  )
}

export default App
