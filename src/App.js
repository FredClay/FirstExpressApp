import bagEndSketch from './ImagesToUse/bagEndSketch.jpg'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Lotr from './Lotr';
import Character from './character'

function App() {
  
  return (
    <div>
      <Header/>
      <div id='middleSection'>
        <Lotr/>
        <Character name='Gimli' race='Dwarf' age={287}/>
        <Character name='Elrond' race='Elf' age={7310}/>
        <img src={bagEndSketch} alt='bag end drawing'></img>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
