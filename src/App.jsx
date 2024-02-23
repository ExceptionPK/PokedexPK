import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Index from './Views/Index'
import Detalle from './Views/Detalle'

function App() {
  
  return (
    /*Se definen las rutas Index y detalle de cada pokemon*/
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/pokemon/:id' element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
