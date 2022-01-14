import { FunctionComponent } from "react";
import './greeting.css';
import SocialsEntry from './SocialsEntry';

const Socials: FunctionComponent = () => {
    return (
        <div className="greeting-socials">
            <SocialsEntry image="/assets/revolt_r.svg" link="https://rvlt.gg/jan" text="@jan" />
            <SocialsEntry image="/assets/discord.svg" link="https://discord.gg/4pZgvqgYJ8" text={"J\u0430n#2756"} />
            <SocialsEntry image="/assets/github.svg" link="https://github.com/janderedev" text="JandereDev" />
            <SocialsEntry image="/assets/misskey.svg" link="https://miruku.cafe/@jan" text="@jan@miruku.cafe" />
            <SocialsEntry image="/assets/email.svg" link="mailto:me@janderedev.xyz" text="me@janderedev.xyz" redactUntilClick={true} />
        </div>
    );
}

export default Socials;
