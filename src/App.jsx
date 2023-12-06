import './App.css'
import "toastify-js/src/toastify.css"
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
