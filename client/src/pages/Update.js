import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function UpdateAccount() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = [] //need to create an array of promises. We want to wait to see if all fields are updated before we push the promise
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises) //passing in the promises in promises which then executes a redirect to home
      .then(() => {
        navigate('/')
      })
      .catch(() => {
        setError("Failed to update account")
        console.log(error)
      })
      .finally(() => { //this is invoked when the promise is fulfilled whether it is successful or not
        setLoading(false)
      })
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Account</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <h3 className="text-center mb-10">You can update your email or password</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="enter a new password"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="confirm your new password"
              />
            </Form.Group>
            <div class="col-md-12 text-center">
                  <Button disabled={loading} className="w-25" style={{ backgroundColor: "#FB6245", color: "#ffff", marginTop: "5vh", borderColor: "rgb(249,244,257" }} variant="outline-primary" type="submit">Update</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/account">Cancel</Link>
      </div>
    </>
  )
}