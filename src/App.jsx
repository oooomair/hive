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
import Food from './components/eachCard/Food';
import Drinks from './components/eachCard/Drinks';
import Desserts from './components/eachCard/Desserts';
import EachAccolade from './components/eachAccolade/EachAccolade';
import { ac1, ac2, ac3, ac4, ac5, ac6 } from './const'

function Home() {
  return (
    <div className="App">
      <Homepage/>
      <About/>
      <Cards/>
      <Games/>
      <Franchise/>
      <Contact/>
      <Footer/>
    </div>
  );
}

function App() {

  const accolades = [
    {
        img: ac6,
        id: '1'
    },
    {
        img: ac2,
        id: '2'
    },
    {
        img: ac3,
        id: '3'
    },
    {
        img: ac4,
        id: '4'
    },
    {
        img: ac1,
        id: '5'
    },
    {
        img: ac5,
        id: '6'
    },
]

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/accolades' element={<Accolades accolades={accolades}/>} />
        <Route path='/eachAccolade/:id' element={<EachAccolade accolades={accolades}/>} />
        <Route path='/foods' element={<Food/>}/>
        <Route path='/drinks' element={<Drinks/>}/>
        <Route path='/desserts' element={<Desserts/>}/>
      </Routes>
    </div>
  );
}

export default App;
