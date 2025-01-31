import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    const tick = () => {
        setSeconds(prevSeconds => prevSeconds + 1);
    };

    return (
        <div className="timer-container">
            <div className="timer">
                Seconds: {seconds}
            </div>
        </div>
    );
};

export default Timer;
