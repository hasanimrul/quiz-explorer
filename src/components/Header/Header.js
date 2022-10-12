import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <>
            
    <Navbar expand="lg">
      <Container className='header'>
            <div className='btn-home'>
                <Link to='/'>
                    <button>Quiz Explorer</button>
                </Link>
            </div>
        <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='menu-item'>
                <Link to="/">Topics</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/statistics">Statistics</Link>
            </Nav>
            </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>

            
        {/* </Navbar> */}
        </>
    );
};

export default Header;