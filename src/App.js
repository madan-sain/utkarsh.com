
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from "./pages/Courses"
import Bloge from './pages/Bloge';
import Admission from './pages/Admission';
import Studentspt from './pages/Studentspt';
import Contact from './pages/Contact';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    
    <div>
      <Header className="navbar"/>   
      <Routes>
      <Route path='/' element={<Home />}  className=""/>        
      <Route path='Home' element={<Home />}  className=""/>        
      <Route path='About' element={<About />}  className=""/>              
      <Route path='Courses' element={<Courses />}  className=""/>              
      <Route path='Bloge' element={<Bloge />}  className=""/>              
      <Route path='Studentspt' element={<Studentspt />}  className=""/>              
      <Route path='Admission' element={<Admission />}  className=""/>              
      <Route path='Contact' element={<Contact />}  className=""/>              
      </Routes>    
      <Footer />
    </div>

  );
}

export default App;
