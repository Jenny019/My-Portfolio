import Home from './components/home/Home';
import About from './components/about/About';
import ProjectList from './components/projectList/ProjectList';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<ProjectList />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>  
        <Footer />     
      </Router>         
    </div>
  );
}

export default App;
