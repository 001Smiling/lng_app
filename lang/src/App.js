import './App.css';
import Cardpage from './components/cardpage/cardpage';
import Mainpage from './components/mainpage/mainpage';
import Header from './components/header/header';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
            <Routes>
                <Route exact path="/" element={<Mainpage />} />
                <Route exact path="/cards" element={<Cardpage />} />
            </Routes>
    </div>
  );
}

export default App;
