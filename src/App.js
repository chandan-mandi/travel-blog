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
import MyBlogs from './components/Dashboard/MyBlogs';
import AllBlogs from './components/Dashboard/AllBlogs';
import MakeAdmin from './components/Dashboard/MakeAdmin';
import BlogDetails from './pages/BlogDetails';
import UpdateBlog from './components/Dashboard/UpdateBlog';
import PrivateRoute from './components/LoginManager/PrivateRoute';
import AdminRoute from './components/LoginManager/AdminRoute';

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/blogs/:id" element={<PrivateRoute> <BlogDetails /> </PrivateRoute>} />
            <Route path={`/dashboard`} element={<PrivateRoute> <Dashboard /> </PrivateRoute>} >
              <Route path={`/dashboard/addBlog`} element={<PrivateRoute> <AddBlog /> </PrivateRoute>}> </Route>
              <Route path={`/dashboard/myBlogs`} element={<PrivateRoute> <MyBlogs /> </PrivateRoute>}> </Route>
              <Route path={`/dashboard/allBlogs`} element={<AdminRoute> <AllBlogs /> </AdminRoute>}> </Route>
              <Route path={`/dashboard/updateBlog/:id`} element={<AdminRoute><UpdateBlog /> </AdminRoute>}> </Route>
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute> <MakeAdmin /> </AdminRoute>}> </Route>
            </Route>
          </Routes>
          <Toaster />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;