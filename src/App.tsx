import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DriftPage from './components/Pages/DriftPage';
import ForzaPage from './components/Pages/ForzaPage';
import HomePage from './components/Pages/HomePage';
import TimeAttackPage from './components/Pages/TimeAttackPage';
import Menu from './components/Menu/Menu';
import './App.css';

export const baseURL = '/react-menu';

export default function App() {
  return (
    <Router >
      <div>
        <Menu />
        <main className='page'>
          <Routes>
            <Route path={`${baseURL}/`} element={<HomePage />} />
            <Route path={`${baseURL}/drift`} element={<DriftPage />} />
            <Route path={`${baseURL}/timeattack`} element={<TimeAttackPage />} />
            <Route path={`${baseURL}/forza`} element={<ForzaPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
