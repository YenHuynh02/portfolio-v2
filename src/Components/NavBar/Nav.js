import React, { useState } from "react";
import './Nav.sass';
import logo from '../../Images/logo.png'

export default function Nav({ navOpacity }) {
    const [hoverNavBar, setHoverNavBar] = useState(null);
    const [checkedOpacity, setCheckedOpacity] = useState(false);
    
    const handleMouseEnter = (link) => {
        setHoverNavBar(link);
        setCheckedOpacity(true)
    }

    const handleMouseLeave = () => {
        setHoverNavBar(null);
        setCheckedOpacity(false);
    }

    const getOpacity = () => {
        return checkedOpacity ? 1 : navOpacity;
    }

    const navBarStyle = (link) => {
        return {
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            opacity: hoverNavBar && hoverNavBar !== link ? 0.2 : getOpacity(),
            transform: hoverNavBar === link ? 'scale(1.15)' : 'scale(1)'
        }
    };

    return (
        <div className="navBar">
            <ul>
                <li>
                    <a href="https://github.com/YenHuynh02"
                        onMouseEnter={() => handleMouseEnter('Home')}
                        onMouseLeave={handleMouseLeave}
                        style={navBarStyle('Home')}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a href="https://github.com/YenHuynh02"
                        onMouseEnter={() => handleMouseEnter('Projects')}
                        onMouseLeave={handleMouseLeave}
                        style={navBarStyle('Projects')}
                    >
                        Projects
                    </a>
                </li>
                <li><img src={logo} alt='logo' id="logo"></img></li>
                <li>
                    <a href="https://github.com/YenHuynh02"
                        onMouseEnter={() => handleMouseEnter('Background')}
                        onMouseLeave={handleMouseLeave}
                        style={navBarStyle('Background')}
                    >
                        Background
                    </a>
                </li>
                <li>
                    <a href="https://github.com/YenHuynh02"
                        onMouseEnter={() => handleMouseEnter('Contact')}
                        onMouseLeave={handleMouseLeave}
                        style={navBarStyle('Contact')}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
}