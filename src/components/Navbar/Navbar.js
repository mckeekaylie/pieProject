import React from 'react';
import './Navbar.css';
import piePic from '../../assets/pie.jpg';
import Logout from '../Navbar/Logout/Logout';

const Navbar = (props) => {
    return (
        <div>
            <nav>
                <img id = 'piePic' src={piePic} alt='pie' />
            </nav>
        </div>
    )
}

export default Navbar;