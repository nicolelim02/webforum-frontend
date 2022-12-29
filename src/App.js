import './App.css';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from './pages/signIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
