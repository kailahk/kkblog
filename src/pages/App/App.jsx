import './App.css';
import SearchBar from '../../components/SearchBar';
import { Routes, Route } from 'react-router-dom'
import SomePage from '../SomePage/SomePage';
import NavBar from '../../components/NavBar/NavBar';
import SearchPage from '../SearchPage/SearchPage';

export default function App() {
  return (
    <div className="App">
      <h1>Repo Search</h1>
      <NavBar />
      <Routes>
        <Route path="/somepage" element={<SomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}