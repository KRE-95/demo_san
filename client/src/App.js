
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
//Components
import Actors from './components/Actors';
import Movies from './components/Movies';
import Actor from './components/Actor';
import Movie from './components/Movie';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className='bg-' >
				<Navigation />
        <Routes >
	        <Route index element={<Movies/>} />
          <Route path="actors">
            <Route index element={<Actors/>} />
            <Route path=":name" element={<Actor  />} />
          </Route>
          <Route path="movies">
            <Route index element={<Movies />} />
            <Route path=":name" element={<Movie/>} />
          </Route>
        </Routes>
    	</div>
    <Footer/>
    </>
  );
}

export default App;

  

