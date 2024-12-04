import React, { useState, useEffect } from "react";
import TypeText from '../Components/TypeText.tsx';
import './Home.sass';
import { peter } from '../../Images/images';

export default function Home() {
    const msg = 'Hey there, this is Peter Huynh';

    return (
        <div className="homePage">
            <div>
                <TypeText message={msg}></TypeText>
            </div>
            <div><img src={peter} alt='PeterImg'></img></div>
            <div><p>Hello, This is Yen Huynh</p></div>
        </div >
    );
};