import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="primary">
            <Container>
                <Navbar.Brand><Link to='/' className='text-decoration-none text-secondary'>News Portal</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>All News</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>Advertise</Nav.Link>
                        <Nav.Link eventKey={2}>
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