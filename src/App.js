import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import HomePage from './OMDB Exercise/HomePage';
import MovieDetails from './OMDB Exercise/MovieDetails';

 function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
