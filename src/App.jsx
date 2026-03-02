
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Navbar from "./components/NavBar.jsx"
import Search from "./pages/SearchTopic.jsx"
import Top from "./pages/Top.jsx"
import Best from "./pages/Best"
import New from "./pages/New.jsx"
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path = '/' element={<Search/>} />
    <Route path = '/Top' element={<Top/>} /> 
    <Route path = '/Best' element={<Best/>} />
    <Route path = '/New' element={<New/>} /> 
    </Routes>
     
    </BrowserRouter>
  )
}

export default App
