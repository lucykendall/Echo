import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Account() {
    const [error, setError] = useState('')
    const { currentUser } = useAuth()
    const { logout } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            navigate('/')
        } catch {
            setError('Failed to logout')
        }
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Account</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong> {currentUser.email}
                    <Link to = "/account/update" className="btn btn-primary w-100 mt-3" style= {{ backgroundColor: "#FB6245" }}>Update Account</Link>
                    <Button variant="link" onClick={handleLogout} className="btn btn-primary w-100 mt-3" style={{ backgroundColor: "#FB6245", color: "#ffff", marginTop: "5vh", marginBottom: "5vh", borderColor: "rgb(249,244,257" }} variant="outline-primary" type="submit">Logout</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
