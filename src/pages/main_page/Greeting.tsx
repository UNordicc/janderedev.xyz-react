import { FunctionComponent } from "react";
import './greeting.css';
import WelcomeText from './WelcomeText';
import Socials from './Socials';
import ScrollHint from './ScrollHint';

const Greeting: FunctionComponent = () => {
    return (
        <div className="greeting-area">
            <div className="greeting-flex-container">
                <WelcomeText />
                <Socials />
            </div>
            <ScrollHint />
        </div>
    );
}

export default Greeting;
