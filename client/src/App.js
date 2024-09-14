import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import Landing from './pages/Landing/Landing';
import About from './pages/About';  // Example additional pages
import Features from './pages/Features'; // Example additional pages
import Menu from './Menu';  // Menu component for navigation

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />  {/* Navigation menu */}
        <Routes>
          <Route path="/" element={<Landing />} />       {/* Landing page route */}
          <Route path="/about" element={<About />} />    {/* About page route */}
          <Route path="/features" element={<Features />} /> {/* Features page route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
