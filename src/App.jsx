import './App.scss';
import About from './components/about/About';
import Cards from './components/Cards/Cards';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Franchise from './components/franchise/Franchise';
import Games from './components/games/Games';
import Homepage from './components/homepage/Homepage';
import {Route, Routes} from 'react-router-dom'
import Accolades from './components/accolades/Accolades';
import Maps from './components/maps/Maps';

function Home() {
  return (
    <div className="App">
      <Homepage/>
      <About/>
      <Cards/>
      <Games/>
      <Franchise/>
      <Contact/>
      <Maps/>
      <Footer/> 
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/accolades' element={<Accolades/>} />
      </Routes>
    </div>
  );
}

export default App;
