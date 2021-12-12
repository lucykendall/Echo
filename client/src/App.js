import React from 'react';
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute'
import Login from './pages/Login'
import Home from './pages/Home'
import Account from './pages/Account'
import SignUp from './pages/SignUp'
import Update from './pages/Update'
import Navbar from './components/Navbar';
import Play from './pages/Play';

function App() {

  return (
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}>
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Navbar />
        <Router>
            <AuthProvider>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/play" element={<Play/>} />
                <Route path="/login" element={<Login/>} />
                <Route
                  path="/account"
                  element={
                    <PrivateRoute redirectTo="/login">
                      <Account />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/account/update"
                  element={
                    <PrivateRoute redirectTo="/login">
                      <Update />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </AuthProvider>
        </Router>
    </div>
  </Container>
)
}

export default App