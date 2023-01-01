import './assets/styles/base.scss'
import Cardpage from './components/cardpage/cardpage';
import Mainpage from './components/mainpage/mainpage';
import Header from './components/header/header';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
         <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Mainpage />} />
                <Route exact path="/cards" element={<Cardpage />} />
            </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
