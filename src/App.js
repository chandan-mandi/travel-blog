import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import AuthProvider from './components/contexts/AuthProvider';
import Navbar from './pages/Shared/Navbar/Navbar';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/LoginManager/Login/Login';
import SignUp from './components/LoginManager/SignUp/SignUp';
import Dashboard from './pages/Dashboard';
import AddBlog from './components/Dashboard/AddBlog';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path={`/dashboard`} element={<Dashboard />} >
              <Route path={`/dashboard/addBlog`} element={<AddBlog />}> </Route>
            </Route>
          </Routes>
          <Toaster />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;