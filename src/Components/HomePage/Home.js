import React, { useState, useEffect } from "react";
import './Home.sass';
import { peter, github, instagram, linkedln, react, javascript } from '../../Images/images';

export default function Home({ setNavOpacity }) {
    const [socialName, setSocialName] = useState();
    const [textSocial, setTextSocial] = useState({});
    const [styleSocialIcon, setStyleSocialIcon] = useState({});
    const [imageStyle, setImageStyle] = useState({});
    const [programmingLanguage, setProgrammingLanguage] = useState({});
    const socialMedia = ['Linkedln', 'Github', 'Instagram'];
    var currentIndexSocial = 0, currentIndexImg = 0;

    const socialMediaHoverOn = (name) => {
        setSocialName(name);
        setTimeout(() => {
            setTextSocial({ opacity: 1, transition: 'opacity 0.5s ease' });
            setStyleSocialIcon({ borderRadius: '50%', transform: 'rotate(-90deg)', opacity: 1, transition: 'transform 0.5s ease, border-radius 0.5s ease, opacity 0.5s ease' });
        }, 500);
    }

    const socialMediaHoverOff = (name) => {
        setSocialName(name);
        setTimeout(() => {
            setTextSocial({ opacity: 0, transition: 'opacity 0.5s ease' });
            setStyleSocialIcon({ transform: 'rotate(0deg)', transition: 'transform 0.5s ease, border-radius 0.5s ease, opacity 0.5s ease' })
        }, 1500);
    }

    const displaySocialText = () => {
        socialMediaHoverOff(socialMedia[currentIndexSocial]);
        currentIndexSocial = (currentIndexSocial + 1) % socialMedia.length;
        socialMediaHoverOn(socialMedia[currentIndexSocial]);
    }

    const imgTransformArr = [
        { transform: 'rotate(0deg)', transition: 'transform 1s ease, border-radius 1s ease, opacity 1s ease' },
        { borderRadius: '50%', opacity: 1, transform: 'rotate(-10deg)', transition: 'transform 1s ease, border-radius 1s ease, opacity 1s ease' },
        { transform: 'rotate(0deg)', transition: 'transform 1s ease, border-radius 1s ease, opacity 1s ease' },
        { borderRadius: '50%', opacity: 1, transform: 'rotate(-20deg)', transition: 'transform 1s ease, border-radius 1s ease, opacity 1s ease' },
        { transform: 'rotate(0deg)', transition: 'transform 1s ease, border-radius 1s ease, opacity 1s ease' }
    ];

    const transformSocialImage = () => {
        currentIndexImg = (currentIndexImg + 1) % imgTransformArr.length;
        setImageStyle(imgTransformArr[currentIndexImg]);

        if (currentIndexImg === 1 || currentIndexImg === 3) {
            setNavOpacity(0.2);
            setProgrammingLanguage({ opacity: 1 });
        }

        else {
            setNavOpacity(1);
            setProgrammingLanguage({ opacity: 0 });
        }
    }

    useEffect(() => {
        const intervalId = setInterval(displaySocialText, 2000);
        const imgValid = setInterval(transformSocialImage, 2500);
        return () => {
            clearInterval(intervalId);
            clearInterval(imgValid);
        };

        // eslint-disable-next-line
    }, []);

    return (
        <div className="homePage">
            <div className="homeImageComponent">
                <span className="icon react"><img src={react} style={programmingLanguage} alt="react" /></span>
                <img
                    src={peter}
                    alt="PeterImage"
                    style={imageStyle}
                    id="PeterImg"
                />
                <span className="icon javascript"><img src={javascript} style={programmingLanguage} alt="javascript" /></span>
                <div className="introduce">
                    <p>
                        Hello, my name is Yen Huynh, I'm  a learner web developer, and focus on Front-end
                        environment.
                    </p>
                </div>
            </div>

            <div className="socialWrap">
                <div className="socialMedia">
                    <ul>
                        <li>
                            <div className="socialNameWrap">
                                <a href="https://github.com/YenHuynh02" target="_blank" rel="noreferrer">
                                    <img
                                        src={github}
                                        alt="github"
                                        style={socialName === 'Github' ? styleSocialIcon : {}}
                                    />
                                </a>
                                {socialName === "Github" &&
                                    (<span className="socialText" style={textSocial}><span id="firstLetter">G</span>ithub</span>)
                                }
                            </div>
                        </li>
                        <li>
                            <div className="socialNameWrap">
                                <a href="https://www.instagram.com/peter.huynh2" target="_blank" rel="noreferrer">
                                    <img
                                        src={instagram}
                                        alt="instagram"
                                        style={socialName === 'Instagram' ? styleSocialIcon : {}}
                                    />
                                </a>
                                {socialName === "Instagram" &&
                                    (<span className="socialText" style={textSocial}><span id="firstLetter">I</span>nstagram</span>)
                                }
                            </div>
                        </li>
                        <li>
                            <div className="socialNameWrap">
                                <a href="https://www.linkedin.com/in/yen-huynh-pp12" target="_blank" rel="noreferrer">
                                    <img
                                        src={linkedln}
                                        alt="linkedln"
                                        style={socialName === 'Linkedln' ? styleSocialIcon : {}}
                                    />
                                </a>
                                {socialName === "Linkedln" &&
                                    (<span className="socialText" style={textSocial}><span id="firstLetter">L</span>inkedln</span>)
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </div> {/* End socialWrap */}


        </div>
    );
}