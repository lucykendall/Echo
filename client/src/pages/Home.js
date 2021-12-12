import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home() {
    
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Welcome to Echo</h2>
                    <Link to = "/account" className="btn btn-primary w-100 mt-3">Account</Link>
                </Card.Body>
            </Card>
        </div>
    )
}
