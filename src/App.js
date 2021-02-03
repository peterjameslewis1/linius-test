import React from 'react';
import './App.css';
import Header from './Components/Header';
import MovieList from './Components/MovieList'
import Footer from './Components/Footer'

const App = () => {

  return (
    <div className="App">
      <Header />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
