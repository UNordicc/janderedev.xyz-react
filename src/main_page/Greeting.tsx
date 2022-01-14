import { FunctionComponent } from "react";
import './greeting.css';
import WelcomeText from './WelcomeText';
import Socials from './Socials';
import ScrollHint from './ScrollHint';

const Greeting: FunctionComponent = () => {
    return (
        <div className="greeting-area">
            <WelcomeText />
            <Socials />
            <ScrollHint />
        </div>
    );
}

export default Greeting;
