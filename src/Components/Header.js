import React from 'react';

const Header = () => {

    return (
        <div className="header">
            <div className="header-mobile">
                <i class="fas fa-home"></i>
                <h2>Linius</h2>
                <i class="fas fa-user-circle"></i>
            </div>
            <nav className="nav">
                <ul>
                    <a href="#home"><li>Home</li></a>
                    <a href="#about"><li>About</li></a>
                    <a href="#contact">
                        <li>Contact</li>
                    </a>
                </ul>
            </nav>
        </div >
    )
}


export default Header;