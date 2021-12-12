import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext'; //provides the context
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';

function App() {
  return (
        <Container className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "100vh" }}>
          <div className="w-100" style={{ maxWidth: '400px'}}>
            <Router>
              <AuthProvider>
                <Routes>
                  <Route exact path="/" element={<Home/>} />
                  <Route path="/signup" element={<SignUp/>} />
                  <Route path="/login" element={<Login/>} />
                </Routes>
              </AuthProvider>
            </Router>
          </div>
        </Container>
  );
}

export default App;
