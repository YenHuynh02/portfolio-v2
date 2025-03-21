import { useState, useEffect } from "react";
import './Home.sass';
import StatusBar from "frontend/Components/StatusBar/Status";
import Projects from "frontend/ProjectPage/Projects";
import images from "frontend/Components/Icons/icons";
import { projectData } from "backend/data/projectData";

export default function Home() {
    const [visibleTitle, setVisibleTitle] = useState<string>('');
    const [visibleName, setVisibleName] = useState<string>('');
    const [isHiding, setIsHiding] = useState<boolean>(false);
    const [isPausedButton, setIsPausedButton] = useState<boolean>(false);
    const nameArr = ['Yen', 'Peter'];
    const titleArr = ['a Software Developer', 'a Full Stack Developer', 'an AI Enthusiastic'];
    const imageArray = Object.entries(images);
    const year = new Date().getFullYear();

    useEffect(() => {
    let i = 0;
    let j = 0;
    let titleIndex = 0;
    let nameIndex = 0;
    let hidingTitle = false;
    let hidingName = false;

    const updateTitle = () => {
        const currentTitle = titleArr[i];

        if (!hidingTitle) {
            titleIndex++;
            if (titleIndex > currentTitle.length) {
                setTimeout(() => { // Wait 2 seconds before erasing
                    hidingTitle = true;
                    updateTitle();
                }, 2000);
                return;
            }
        } else {
            titleIndex--;
            if (titleIndex < 0) {
                hidingTitle = false;
                titleIndex = 0;
                i = (i + 1) % titleArr.length;
            }
        }

        setVisibleTitle(currentTitle.substring(0, titleIndex));
        setTimeout(updateTitle, 80);
    };

    const updateName = () => {
        const currentName = nameArr[j];

        if (!hidingName) {
            nameIndex++;
            if (nameIndex > currentName.length) {
                setTimeout(() => { // Wait 2 seconds before erasing
                    hidingName = true;
                    updateName();
                }, 2500);
                return;
            }
        } else {
            nameIndex--;
            if (nameIndex < 0) {
                hidingName = false;
                nameIndex = 0;
                j = (j + 1) % nameArr.length;
            }
        }

        setVisibleName(currentName.substring(0, nameIndex));
        setTimeout(updateName, 100);
    };

    updateTitle();
    updateName();

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
                        <p><span className={isHiding ? 'fadeOut' : 'fadeIn'}>{visibleName}</span> Huynh</p>
                    </div>
                    <div className="wrapper">
                        <p>I'm&nbsp;</p>
                        <span className={isHiding ? 'fadeOut' : 'fadeIn'}>{visibleTitle}
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