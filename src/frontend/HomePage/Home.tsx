import { useState, useEffect } from "react";
import './Home.sass';
import StatusBar from "frontend/Components/StatusBar/Status";
import Projects from "frontend/ProjectPage/Projects";
import images from "frontend/Components/Icons/icons";
import { projectData } from "backend/data/projectData";
import { clear } from "console";

export default function Home() {
    const [visibleText, setVisibleText] = useState<string>('');
    const [isHiding, setIsHiding] = useState<boolean>(false);
    const [isPausedButton, setIsPausedButton] = useState<boolean>(false);
    const nameArr = ['Software Developer', 'Full Stack Developer'];
    const imageArray = Object.entries(images);
    const year = new Date().getFullYear();

    useEffect(() => {
    let i = 0;
    let charIndex = 0;
    let hiding = false;

    const updateText = () => {
        const currentName = nameArr[i];

        if (!hiding) {
            charIndex++;
            if (charIndex > currentName.length) {
                setTimeout(() => { // Wait 2 seconds before erasing
                    hiding = true;
                    updateText();
                }, 2000);
                return;
            }
        } else {
            charIndex--;
            if (charIndex < 0) {
                hiding = false;
                charIndex = 0;
                i = (i + 1) % nameArr.length;
            }
        }

        setVisibleText(currentName.substring(0, charIndex));
        setTimeout(updateText, 80);
    };

    updateText();

    return () => {};
}, []);


    return (
        <div className="homePage">
            <div className="statusBar">
                <StatusBar />
            </div>
            <div className="homeContainer">
                <div className="textContainer">
                    <div className="introduction">
                        <p>Hi, My name is</p>
                        <p>Peter Huynh</p>
                    </div>
                    <div className="wrapper">
                        <p>I'm <span style={{ color: '#FF4500' }}>a</span>&nbsp;</p>
                        <span className={isHiding ? 'fadeOut' : 'fadeIn'}>{visibleText}
                            <span id="cursor">|</span>
                        </span>
                    </div>
                </div>
                <div className="iconContainer">
                    <div className="scrolling">
                        {[...imageArray, ...imageArray].map(([name, src], index) => (
                            <img key={`${name}-${index}`} src={src} alt={name} />
                        ))}
                    </div>
                </div>

                <div className="projects">
                    <h2>Featured Projects</h2>
                    {projectData.map((project, index) => (
                        <Projects
                            key={index}
                            name={project.name}
                            languages={project.languages}
                            description={project.description}
                            background={project.background}
                            url={project.url}
                        />
                    ))}
                </div>
            </div>
            <div
                className="read-more"
                onMouseEnter={() => setIsPausedButton(true)}
                onMouseLeave={() => setIsPausedButton(false)}
            >
                <a href="#">Read more
                    <span
                        style={{ transform: isPausedButton ? 'scale(1.1)' : '' }}
                    >
                        <span
                            id="caret-down"
                            style={{ animationPlayState: isPausedButton ? "paused" : "running" }}
                        ></span>
                    </span>
                </a>
            </div>
            <div className="copyright">
                <p>&copy;{year} Yen Huynh</p>
            </div>
        </div>
    );
}; 