import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from './images/logo-thing.png'
import { Link } from 'react-scroll'

export const NavBar = () => {
    const [status, setStatus] = useState(false)
    const toggleNavBar = () => {
        setStatus(!status)
    }
    return (
            <Navbar expand="lg" fixed="top" bg="white" expanded={status} >
                <Navbar.Brand>
                    <Link to="home" spy={true} smooth={true} duration={500}>
                        <img
                            src={logo}
                            width="120"
                            height="50"
                            className="d-inline-block align-top"
                            alt="brand-logo"
                        />
                    </Link>   
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavBar}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <Link onClick={() => setStatus(false)} to="stories" spy={true} smooth={true} duration={500} offset={-120}>Stories</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link onClick={() => setStatus(false)} to="faq" spy={true} smooth={true} duration={500} offset={-120}>FAQ</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link onClick={() => setStatus(false)} to="member" spy={true} smooth={true} duration={500} offset={-120}>Members</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link onClick={() => setStatus(false)} to="contact" spy={true} smooth={true} duration={500} offset={-120}>Contact</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}
