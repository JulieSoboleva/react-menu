import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DriftPage from './components/Pages/DriftPage';
import ForzaPage from './components/Pages/ForzaPage';
import HomePage from './components/Pages/HomePage';
import TimeAttackPage from './components/Pages/TimeAttackPage';
import Menu from './components/Menu/Menu';
import './App.css';

export default function App() {
  return (
    <Router basename='/react-menu'>
      <div>
        <Menu />
        <main className='page'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
