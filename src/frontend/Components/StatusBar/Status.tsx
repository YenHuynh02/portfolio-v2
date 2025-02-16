import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faExclamation, faBolt } from "@fortawesome/free-solid-svg-icons";

const StatusBar: React.FC = () => {
    const [battery, setBattery] = useState<string>("100%");
    const [charging, setCharging] = useState<boolean>(false);
    const [time, setTime] = useState<string>("");
    const [date, setDate] = useState<string>("");

    const checkBattery = async () => {
        if ("getBattery" in navigator) {
            (navigator as any).getBattery().then((batteryManager: any) => {
                setBattery(`${Math.round(batteryManager.level * 100)}%`);
                setCharging(batteryManager.charging);
                
                batteryManager.onlevelchange = () => {
                    setBattery(`${Math.round(batteryManager.level * 100)}%`);
                }

                batteryManager.onchargingchange = () => {
                    setCharging(batteryManager.charging);
                }
            });
        }
    }

    const updateTime = () => {
        const now = new Date();
        const dateString = now.toLocaleDateString(undefined, {
            weekday: 'short',
            month: 'short',
            day: '2-digit'
        })

        let timeString = now.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        })

        timeString = timeString.replace('a.m.', 'AM').replace('p.m.', 'PM');

        setTime(`${timeString}`);
        setDate(`${dateString}`);
    };

    const styles: { [key: string]: React.CSSProperties } = {
        statusBar: {
            display: 'flex',
            alignItems: 'center',
            fontFamily: "\'Poppins\', serif",
            fontSize: '18px',
        }
    };

    useEffect(() => {
        checkBattery();
        updateTime();
        const timeInterval = setInterval(updateTime, 1000);
        return () => clearInterval(timeInterval);
    }, []);

    return (
        <div className="statusWrapper">
            <FontAwesomeIcon icon={faWifi} />
            <span style={styles.statusBar}>
                {!charging
                    ? <FontAwesomeIcon icon={faExclamation} style={{ width: '20px' }} />
                    : <FontAwesomeIcon icon={faBolt} style={{ width: '20px' }} />}
                {battery}
            </span>
            <span style={styles.statusBar}>{time}</span>
            <span style={styles.statusBar}>{date}</span>
        </div>
    );
}

export default StatusBar;