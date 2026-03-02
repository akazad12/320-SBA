
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Navbar from "./components/NavBar.jsx"
import New from "./pages/New"
// import Top from "./pages/Top"
// import Old from "./pages/Old"
// import Saved from "./pages/Saved"
// import newDetails from "./pages/newDetails"
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path = '/new' element={<New/>} />
    {/* <Route path = '/top' element={<Top/>} /> 
    <Route path = '/old' element={<Old/>} /> */}
    </Routes>
     
    </BrowserRouter>
  )
}

export default App
