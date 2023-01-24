import { FunctionComponent } from "react";
import './greeting.css';

const WelcomeText: FunctionComponent = () => {
    return (
        <div className="greeting-welcome">
            <span className="main-text">Hi.</span>
            <br/>
            <span className="sub-text">I'm UNordic. </span>
            <br/>
            <img
                src="https://github.com/twitter/twemoji/blob/master/assets/72x72/1f1f5-1f1f1.png?raw=true"
                style={{
                    position: "relative",
                    left: "80%",
                    transform: "translateX(-214%)",
                    top: "20%",
                }}
            />
            <img
                src="/assets/fedora.png"
                style={{
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-100%)",
                    top: "20%",
                }}
            />
             <img
                src="/assets/arch.png"
                style={{
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-65%)",
                    top: "20%",
                }}
            />
            <br/>
        </div>
    );
}

export default WelcomeText;
