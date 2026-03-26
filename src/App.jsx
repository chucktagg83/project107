import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Catalog from "./pages/catalog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

       <Footer /> 
    </BrowserRouter>
  )
}

export default App;