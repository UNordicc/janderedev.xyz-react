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
            <span className={`${textHidden ? 'hidden' : ''}`}></span>
            <br/>
            <img
                src=""
                className={`${arrowHidden ? 'hidden' : ''}`}
                onClick={() => window.scroll({ behavior: 'smooth', top: window.innerHeight })}
            />
        </div>
    );
}

export default ScrollHint;
