import './App.css'
import Hombre from './components/Hombre'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Mujer from './components/Mujer'
import Zapatos from './components/Zapatos'
import Footer from './components/Footer'
import Boton from './components/Boton'
import Marcas from './components/Marcas'
import Buzos from './components/Buzos'

function App() {

  return (
    <div>
       <Navbar />
      <main>
      <div id='home'>
        <Home />
      </div>
      <Marcas />
      <div id='hombre'>
        <Hombre />
      </div>
      <div id='mujer'>
      <Mujer />
      </div>
      <div id='zapatos'>
        <Zapatos />
      </div>
      <div id='buzos'>
        <Buzos />
      </div>
      <Boton />
      <div>
        <Footer />
      </div>
      </main> 
    </div>
  )
}

export default App
