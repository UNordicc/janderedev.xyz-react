import { FunctionComponent } from "react";
import './greeting.css';
import WelcomeText from './WelcomeText';
import Socials from './Socials';

const Greeting: FunctionComponent = () => {
    return (
        <div className="greeting-area">
            <WelcomeText />     
            <Socials />
        </div>
    );
}

export default Greeting;
