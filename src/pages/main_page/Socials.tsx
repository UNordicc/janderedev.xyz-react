import { FunctionComponent } from "react";
import './greeting.css';
import SocialsEntry from './SocialsEntry';

const Socials: FunctionComponent = () => {
    return (
        <div className="greeting-socials">
            <SocialsEntry index={0} image="/assets/revolt_r.svg" link="https://rvlt.gg/jan" text="@jan" />
            <SocialsEntry index={1} image="/assets/discord.svg" link="https://discord.gg/4pZgvqgYJ8" text={"J\u0430n#2756"} />
            <SocialsEntry index={2} image="/assets/github.svg" link="https://github.com/janderedev" text="JandereDev" />
            <SocialsEntry index={3} image="/assets/misskey.svg" link="https://miruku.cafe/@jan" text="@jan@miruku.cafe" />
            <SocialsEntry index={4} image="/assets/email.svg" link="==gCtFWasR3b60WZApWYuRWZyVGZlZnL4lne" text="K0WZApWYuRWZyVGZlZnL4lne" redactUntilClick={true} />
        </div>
    );
}

export default Socials;
