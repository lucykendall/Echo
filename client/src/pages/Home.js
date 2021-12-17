import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home() {
    
    return (
        <div>
            <Card>
                <Card.Body>
                    <div class="col-md-12 text-center">
                        <h2 className="text-center mb-4">Welcome to Echo</h2>
                        <p className="text-center mb-4">Test your memory by looking behind the seaweed to find your favourite under water creature!</p>
                        <p className="text-center mb-4">If you get stuck, hit new game and the board will reset.</p>
                        <p className="text-center mb-4">Signup to create an account or hit play to start a game!</p>
                        <Link to = "/account" className="btn btn-primary w-25 mt-3" style={{backgroundColor: "#FB6245", color: "#ffff"}}>Account</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
