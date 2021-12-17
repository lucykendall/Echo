import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  async function handleSubmit(event) { //https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
    event.preventDefault() //prevents page from refreshing

    try {
      setError('')
      setLoading(true) //button disabled - set button to loading because we don't want user to be able to keep clicking
      await login(emailRef.current.value, passwordRef.current.value) //wait for signup to finish and if there's a failure it will be caught
      navigate('/')
    } catch(error) {
      console.log(error)
      setError('Failed to log in')
    }
    setLoading(false) //after it's done waiting for the signup
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
              <div class="col-md-12 text-center">
                <Button disabled={loading} className="w-25" style={{ backgroundColor: "#FB6245", color: "#ffff", marginTop: "5vh", marginBottom: "5vh", borderColor: "rgb(249,244,257" }} variant="outline-primary" type="submit">Login</Button>
              </div>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}
