import React, { useState, useEffect } from "react";

interface TypeTextProps {
    message: string,
    speed?: number // Optional
}

const TypeText: React.FC<TypeTextProps> = ({ message, speed = 100 }) => {
    const [textDisplay, setTextDisplay] = useState<string>('');
    const [cursorVisible, setCursorVisible] = useState<boolean>(false);

    useEffect(() => {
        let i = 0;
        const formattedMsg = message.split('\n').join('<br>');
        const chars = formattedMsg.split('');

        const interval = setInterval(() => {
            if (i < chars.length - 1) {
                setTextDisplay((prev) => prev + chars[i]);
                console.log(chars[i]);
                i++;
            }
            else {
                clearInterval(interval);
                setCursorVisible(false);
            }
        }, speed)

        const cursorInterval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);

        return () => {
            clearInterval(interval);
            clearInterval(cursorInterval);
        };

    }, [message, speed]);

    return (
        <div>
            <span dangerouslySetInnerHTML={{ __html: textDisplay }} />
            <span id='cursor' style={{ visibility: cursorVisible ? "visible" : "hidden" }}>|</span>
        </div>
    );
}

export default TypeText;