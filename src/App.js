import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';

import MovieDetal from './feature/movies/MovieDetal';
import NotFound from './component/NotFound';
import Home from './component/Home';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />;
          <Route path='/movie/:imdbID' element={<MovieDetal />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
