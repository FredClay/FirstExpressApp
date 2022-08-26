import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
// import DriversPage from './CRUD application/DriversPage';
// import HomePage from './CRUD application/HomePage';
// import TeamsPage from './CRUD application/TeamsPage';

import HomePage from './OMDB Exercise/HomePage';
import MovieDetails from './OMDB Exercise/MovieDetails';

 function App() {
  
  return (
    <>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teamsAPI" element={<TeamsPage />} />
          <Route path="/driversAPI" element={<DriversPage />} />
        </Routes> */}
        {/* the below routes are for the imdb exercise. */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
