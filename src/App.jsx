import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Homepage from './Homepage'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </>
  )
}

export default App
