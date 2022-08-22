import logo from './logo.svg';
import bagEndSketch from './ImagesToUse/bagEndSketch.jpg'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Lotr from './Lotr';

function App() {
  
  return (
    <div>
      <Header/>
      <div id='middleSection'>
        <Lotr/>
        <img src={bagEndSketch} alt='bag end drawing'></img>
      </div>
      <Footer/>
    </div>
  );
  
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
