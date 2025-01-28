import React, { useState, useEffect } from "react";
import './Home.sass';
import { clear } from "console";

export default function Home() {
    const [visibleText, setVisibleText] = useState<string>('');
    const [isHiding, setIsHiding] = useState<boolean>(false);
    const nameArr = ['Yen', 'Peter', 'Software Dev'];

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
                <p>Hello, I'm {''}
                    <span className={isHiding ? 'fadeOut' : 'fadeIn'}>{visibleText}</span>    
                </p>
                <img src='https://icons8.com/icon/GPfHz0SM85FX/java'></img>
            </div>
        </div>
    );
}; 