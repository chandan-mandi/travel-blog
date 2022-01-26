import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import AuthProvider from './components/contexts/AuthProvider';
import Navbar from './pages/Shared/Navbar/Navbar';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/LoginManager/Login/Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;