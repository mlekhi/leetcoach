// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Auth0Provider } from '@auth0/auth0-react';
import Landing from './pages/Landing';
import Interviewer from './pages/Interviewer';
import Menu from './components/Menu'; 
import Footer from './components/Footer'; 
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component

const domain = "dev-ssn3e0uff3demdu5.us.auth0.com";
const clientId = "PQaeoThrA3MtRBlr8g5sQc7K4MBTuPN4";

function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <Router>
        <div className="App">
          <Menu />
          <Routes>
            <Route path="/" element={<Landing />} /> 
            <Route
              path="/main"
              element={<PrivateRoute element={<Interviewer />} />}
            />
          </Routes>
          <Footer /> 
        </div>
      </Router>
    </Auth0Provider>
  );
}

export default App;
