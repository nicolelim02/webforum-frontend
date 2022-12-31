import './App.css';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from './pages/signIn';
import SignUp from './pages/signup';
import MyPosts from './pages/myPosts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/my-posts' element={<MyPosts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
