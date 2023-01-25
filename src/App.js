import './App.css';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from './pages/signIn';
import SignUp from "./pages/signup";
import MyPosts from './pages/myPosts';
import { useEffect, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      localStorage.removeItem("user");
    }
  }, [setIsLoggedIn])

  return (
      <BrowserRouter>
        {!isLoggedIn ?
          <Routes>
            <Route path='/' element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='*' element={<SignIn />} />
          </Routes> :
          <Routes>
              <Route path='/home' element={<Home setIsLoggedIn={setIsLoggedIn} />} />
              <Route path='/my-posts' element={<MyPosts />} />
              <Route path='*' element={<Home setIsLoggedIn={setIsLoggedIn} />} />
            </Routes>
        }
      </BrowserRouter>
  );
}

export default App;
