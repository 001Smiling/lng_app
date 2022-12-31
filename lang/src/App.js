
import './assets/styles/base.scss'
import { observer, inject } from 'mobx-react';
import { useEffect } from 'react';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Game from './components/Card/Game'
import WordsApi from './components/WordsApi/WordsApi'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App = inject('wordStore')(observer(({wordStore}) => {
  const {loadData} = wordStore;
  
  useEffect(() => {
    loadData();
  });

  return (
    <Router>
      <div className="App">
        <Header />
        <WordsApi>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
        </WordsApi>
      </div>
    </Router>
  );
}))

export default App;
