import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/6c9882bbac1c7093bd25041881277658.png'

function Header(){

    return(
        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                    <Link style={{textDecoration:'none'}} to='/'>
                    <li>Halo 4</li>
                    </Link>

                    <Link style={{textDecoration:'none'}} to='/Multplayer'>
                    <li>Multiplayer</li>
                    </Link>

                    <Link style={{textDecoration:'none'}} to='/MCC'>
                    <li>Halo:MCC</li>
                    </Link>

                    <Link style={{textDecoration:'none'}} to='/XBOX'>
                    <li>XBOX</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;