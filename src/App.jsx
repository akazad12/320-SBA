
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Navbar from "./components/NavBar.jsx"
import New from "./pages/SearchTopic.jsx"
import Top from "./pages/Top.jsx"
// import Old from "./pages/Old"
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path = '/' element={<New/>} />
    <Route path = '/Top' element={<Top/>} /> 
    {/* <Route path = '/Old' element={<Old/>} /> */}
    </Routes>
     
    </BrowserRouter>
  )
}

export default App
