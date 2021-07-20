import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import '../styles/header.css';

export function Header() {

    const [click, setClick] = useState(false);
    const openClose = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className='header'>
            <div className='navbar'>
                <div className='ladoesquerdo'>
                    <img src={logo} className='logo' />
                </div>
                <div className='ladodireito'>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <div className='header-menu'>
                            <div className='ladoesquerdo'>
                                <img src={logo} className='logo' />
                            </div>
                            <div className='menu-icon' onClick={openClose}>
                                <i  className={click ? ' fas fa-times' : 'fas fa-bars'}></i>
                            </div>
                        </div>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <a>About</a>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <a>Carrers</a>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <a>Events</a>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <a>Products</a>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <a>Support</a>
                        </li>
                    </ul>

                    <div className='menu-x' onClick={openClose}>
                        <i className={click ? ' fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;