import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar id='navbar' data-bs-theme="dark">
                <Container className='py-2'>
                    <Navbar.Brand href="#home" id='nav' >SADWAL PS</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#about" id='nav'>About</Nav.Link>
                        <Nav.Link href="#skills" id='nav'>Skills</Nav.Link>
                        <Nav.Link href="#projects" id='nav'>Projects</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header