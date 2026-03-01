

import { Routes,Route } from 'react-router-dom'

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
// import Saved from "./pages/Saved"
// import JobDetails from "./pages/JobDetails"
import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
    <Route path = '/' element={<Home/>} />
    {/* <Route path = '/saved' element={<Saved/>} /> */}
    {/* <Route path = '/job/:id' element={<JobDetails/>} /> */}
    </Routes>
     
    </>
  )
}

export default App
