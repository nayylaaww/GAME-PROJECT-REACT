import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landingpage/landingpage';
import Login from './login/login';
import GameInfo from './gameinfo/gameinfo';
import 'nes.css/css/nes.min.css';
import Register from './register/register';
import KarakterPage from "./karakter/KarakterPage";
import Grimleaf from "./karakter/Grimleaf";
import Mosslyn from "./karakter/Mosslyn";
import Stonzel from "./karakter/Stonzel";
import Sylphern from "./karakter/Sylphern";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gameinfo" element={<GameInfo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/karakter" element={<KarakterPage />} />
        <Route path="/karakter/grimleaf" element={<Grimleaf />} />
        <Route path="/karakter/mosslyn" element={<Mosslyn />} />
        <Route path="/karakter/stonzel" element={<Stonzel />} />
        <Route path="/karakter/sylphern" element={<Sylphern />} />
      </Routes>
    </Router>
  );
}

export default App;
