import { useState, useEffect } from "react";
import './Home.sass';
import StatusBar from "frontend/Components/StatusBar/Status";
import Projects from "frontend/ProjectPage/Projects";
import images from "frontend/Components/Icons/icons";
import { projectData } from "backend/data/projectData";

export default function Home() {
    const [visibleText, setVisibleText] = useState<string>('');
    const [isHiding, setIsHiding] = useState<boolean>(false);
    const [isPausedButton, setIsPausedButton] = useState<boolean>(false);
    const nameArr = ['Yen Huynh', 'Peter', 'Software Developer', 'Full Stack Developer'];
    const imageArray = Object.entries(images);
    const year = new Date().getFullYear();

    useEffect(() => {
        let i = 0, charIndex = 0, hiding = false;
        const interval = setInterval(() => {
            const currentName = nameArr[i];
            if (!hiding) {
                charIndex++;
                if (charIndex > currentName.length) {
                    setIsHiding(true);
                    hiding = true;
                }
            }
            else {
                charIndex--;
                if (charIndex < 0) {
                    setIsHiding(false);
                    hiding = false;
                    charIndex = 0;
                    i = (i + 1) % nameArr.length;
                }
            }
            setVisibleText(currentName.substring(0, charIndex));
        }, 200);
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="homePage">
            <div className="statusBar">
                <StatusBar />
            </div>
            <div className="homeContainer">
                <div className="textContainer">
                    <div className="wrapper">
                        <p>Hi, I'm {''}</p>
                        <span className={isHiding ? 'fadeOut' : 'fadeIn'}>{visibleText}
                            <span>|</span>
                        </span>
                    </div>
                </div>
                <div className="iconContainer">
                    <div className="scrolling">
                        {imageArray.map(([name, src], index) => (
                            <img key={`${name}-${index}`} src={src} alt={name} />
                        ))}
                        {imageArray.map(([name, src], index) => (
                            <img key={`${name}-${index + imageArray.length}`} src={src} alt={name} />
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
                <p>&copy; Yen Huynh {year}</p>
            </div>
        </div>
    );
}; 