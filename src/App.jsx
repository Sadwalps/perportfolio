import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Homepage from './Homepage'
import Miniproject from './Miniproject'
import Mainproject from './Mainproject'
import Footer from './Footer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/miniprojects' element={<Miniproject />} />
        <Route path='/mainprojects' element={<Mainproject />} />
      </Routes>
    </>
  )
}

export default App
