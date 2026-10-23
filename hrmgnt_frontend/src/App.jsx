import Header_component from './components/header_component';
import Footer_component from './components/footer_component';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import UserHome from './pages/UserHome';
import Register from './pages/Register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header_component />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer_component />
    </div>
  );
}

export default App;
