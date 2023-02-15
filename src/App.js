import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import TvShow from './components/TvShow';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/TvShow" element={<TvShow />}/>
        <Route path="/MovieDetails/:movieId" element={<MovieDetails />}></Route>
        <Route path="*" element={<NotFound />}/>
        
      </Routes>
    </BrowserRouter>
    
      </>
  );
  
}

export default App;

//key: de0e22be