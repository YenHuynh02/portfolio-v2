import React, { useEffect, useState } from "react";
import './Nav.sass';
import { menuData } from "../../backend/data/menuData";
import MenuItems from '../Components/MenuItems';
import { peter, logo } from '../../Images/images'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Nav() {
    const [activeArchived, setActiveArchived] = useState<string>('Home');

    useEffect(() => {
        const currentpath = window.location.pathname;
        const currentMenu = menuData.find((menu) => menu.url === currentpath);
        if (currentMenu) {
            setActiveArchived(currentMenu.title);
        }
        else {
            setActiveArchived('Home');
        }
    }, []);

    const logoIcon = [
        {
            icon: faGithub,
            url: 'https://github.com/YenHuynh02',
        },
        {
            icon: faInstagram,
            url: 'https://www.instagram.com/peter.huynh2/'
        },
        {
            img: logo,
        },
        {
            icon: faLinkedin,
            url: 'https://www.linkedin.com/in/yen-huynh-pp12/'
        }
    ];

    return (
        <nav className="navBar">
            <div className="profileImg">
                <img src={peter} alt='profileImg'></img>
            </div>
            <ul>
                {menuData.map((menu, index) => {
                    return (
                        <MenuItems
                            key={index}
                            items={menu}
                            activeItem={activeArchived}
                            setActiveItem={setActiveArchived}
                        />
                    );
                })}
            </ul>
            <div className="socialMediaLogo">
                {logoIcon.map((logo, index) => {
                    return (
                        <span>
                            {logo.icon ? (
                                <a
                                    href={logo.url}
                                    target="_blank"
                                >
                                    <FontAwesomeIcon key={index} icon={logo.icon} size="2xl" color="red" />
                                </a>
                            ) : (
                                <img src={logo.img} alt='logo' />
                            )}
                        </span>
                    )
                })}
            </div>
        </nav>
    );
}