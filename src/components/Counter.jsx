import { useState } from 'react';
import './Counter.css';

export default function Counter() {

    const [counterValue, setCounterValue] = useState(0);

    function hanldeMinus() {
        setCounterValue(counterValue - 1);
    };

    function hanldePlus() {
        setCounterValue(counterValue + 1);
    }

    return (
        <div className="counter_container">
            <div className="button minus" onClick={() => hanldeMinus()}>-</div>
            <div className="counter">{ counterValue }</div>
            <div className="button plus" onClick={() => hanldePlus()}>+</div>
        </div>
    );
};