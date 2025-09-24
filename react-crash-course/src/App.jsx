import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home"
import About from './Pages/About';
import Contact from './Pages/Contact';
import Posts from './Pages/Posts'
import Nav from './components/Nav';

function App() { 
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/posts" element={<Posts />} />
      </Routes>
      <div>

      </div>

    </Router>
    
  );
}

export default App
 