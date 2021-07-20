import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/footer.css';

export function Footer() {
    return (
        <>
            <footer>
                <div className='ladoesquerdo'>
                    <div>
                        <img src={logo} alt='logo' />
                    </div>
                    <div>
                        <ul className='items'>
                            <li>
                                <a>About</a>
                            </li>
                            <li>
                                <a>Carrers</a>
                            </li>
                            <li>
                                <a>Events</a>
                            </li>
                            <li>
                                <a>Products</a>
                            </li>
                            <li>
                                <a>Support</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='ladodireito'>
                    <div >
                        <ul className='social-media'>
                            <li>
                                <a><i className="fab fa-facebook-square"></i></a>
                            </li>
                            <li>
                                <a><i className="fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a><i className="fab fa-pinterest"></i></a>
                            </li>
                            <li>
                                <a><i className="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="copyright">
                        &copy; 2021 Loopstudios. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;