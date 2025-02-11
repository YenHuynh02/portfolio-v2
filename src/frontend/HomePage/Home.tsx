import { useState, useEffect } from "react";
import './Home.sass';
import images from "frontend/Components/Icons/icons";

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
            <div className="homeContainer">
                <div className="textContainer">
                    <div className="wrapper">
                        <p>Hello, I'm {''}</p>
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
            <div className="footer-mask"></div>
        </div>
    );
}; 