import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='btn-home'>
                <Link to='/'>
                    <button>Quiz Explorer</button>
                </Link>
            </div>
            <nav className='menu-item'>
                <Link to='/'>Topics</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/statistics'>Statistics</Link>
            </nav>

        </div>
    );
};

export default Header;