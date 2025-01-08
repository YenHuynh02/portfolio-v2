import React from "react";
import './Nav.sass';
import { logo } from '../../Images/images'

export default function Nav() {

    return (
        <div className="navBar">
            <div className="navContent">
                <ul>
                    <li>
                        <a href="https://github.com/YenHuynh02"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/YenHuynh02"
                        >
                            Projects
                        </a>
                    </li>
                    <li><img src={logo} alt='logo' id="logo"></img></li>
                    <li>
                        <a href="https://github.com/YenHuynh02"
                        >
                            Background
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/YenHuynh02"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}