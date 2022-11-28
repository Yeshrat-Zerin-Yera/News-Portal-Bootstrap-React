import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="primary">
            <Container>
                <Navbar.Brand href="#home">News Portal</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Advertise</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Profile
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none mt-2'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;