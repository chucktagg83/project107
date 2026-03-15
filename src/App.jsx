import './App.css'
import Navbar from "./components/navbar";
import Catalog from "./pages/catalog";
import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Navbar />

      <main>
        <h1>Hello from React</h1>
        <Catalog />
      </main>

      <Footer />
    </>
  )
}

export default App