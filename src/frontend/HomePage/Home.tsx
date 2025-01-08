import React, { useState, useEffect } from "react";
import TypeText from '../Components/TypeText';
import './Home.sass';
import { peter } from '../../Images/images';

export default function Home() {
    return (
        <div className="homePage">
            <div><img src={peter} alt='PeterImg'></img></div>
            <div><p>Hello, This is Yen Huynh</p></div>
        </div >
    );
}; 