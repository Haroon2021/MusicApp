import axios from 'axios';
import './App.css';
import { Home } from './components/Home';
import { SearchComponent } from './components/Search';
import {  MusicPlayer  } from './components/MusicPlayer';
import { options } from './utils/api';

function App() {
  return (
    <div className="home">
      <Home />
      <SearchComponent />
      <MusicPlayer />
      <options />
    </div>
  );
}

export default App;
