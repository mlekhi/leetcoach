import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Landing from './pages/Landing';
import Interviewer from './pages/Interviewer';
import Menu from './components/Menu/Menu'; 
import Footer from './components/Footer/Footer'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Menu /> 
        <Routes>
          <Route path="/" element={<Landing />} /> 
          <Route path="/main" element={<Interviewer />} /> 
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
