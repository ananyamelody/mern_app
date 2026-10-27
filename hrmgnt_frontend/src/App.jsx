import Header_component from './components/header_component';
import Footer_component from './components/footer_component';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import UserHome from './pages/UserHome';
import Register from './pages/Register';


import AdminHome from './pages/AdminHome';
import HrHome from './pages/HrHome';
import EmpHome from './pages/EmpHome';


import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header_component />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/userhome" element={<UserHome />}></Route>
        <Route path="/hrhome" element={<HrHome/>}></Route>
        <Route path="/adminhome" element={<AdminHome/>}></Route>
        <Route path="/emphome" element={<EmpHome/>}></Route>
      </Routes>

      <Footer_component />
    </div>
  );
}

export default App;
