
import { Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
// import Saved from "./pages/Saved"
// import newDetails from "./pages/newDetails"
import './App.css'

function App() {

  return (
    <>
    <Routes>
    <Route path = '/' element={<Home/>} />
    {/* <Route path = '/saved' element={<Saved/>} /> */}
    {/* <Route path = '/new/:id' element={<newDetails/>} /> */}
    </Routes>
     
    </>
  )
}

export default App
