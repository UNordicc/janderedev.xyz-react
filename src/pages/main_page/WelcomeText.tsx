import { FunctionComponent } from "react";
import './greeting.css';

const WelcomeText: FunctionComponent = () => {
    return (
        <div className="greeting-welcome">
            <span className="main-text">Hi.</span>
            <br/>
            <span className="sub-text">I'm Jan.</span>
        </div>
    );
}

export default WelcomeText;
