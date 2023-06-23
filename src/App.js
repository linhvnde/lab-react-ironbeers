import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { RandomBeer } from './pages/RandomBeer';
import { NewBeer } from './pages/NewBeer';
import { AllBeers } from './pages/AllBeers';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
