import './App.scss';
import About from './components/about/About';
import Cards from './components/Cards/Cards';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Franchise from './components/franchise/Franchise';
import Games from './components/games/Games';
import Homepage from './components/homepage/Homepage';

function App() {
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

export default App;
