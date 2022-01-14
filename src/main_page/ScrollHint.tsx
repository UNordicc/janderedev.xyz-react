import { FunctionComponent, useEffect, useState } from "react";
import './greeting.css';

const ScrollHint: FunctionComponent = () => {
    const [arrowHidden, setArrowHidden] = useState(true);
    const [textHidden, setTextHidden] = useState(true);

    useEffect(() => {
        setTimeout(() => setArrowHidden(false), 2000);
        setTimeout(() => setTextHidden(false), 3000);
    });

    return (
        <div className="scroll-hint-container">
            <span className={`${textHidden ? 'hidden' : ''}`}>Scroll down</span>
            <br/>
            <img src="/assets/pointer_down.svg" className={`${arrowHidden ? 'hidden' : ''}`} />
        </div>
    );
}

export default ScrollHint;
