import { FunctionComponent } from "react";
import './greeting.css';
import SocialsEntry from './SocialsEntry';

const Socials: FunctionComponent = () => {
    return (
        <div className="greeting-socials">
            <SocialsEntry index={0} image="/assets/discord.svg" link="https://discord.com/users/265102629082890240" text={"UNordic#0782"} />
            <SocialsEntry index={1} image="/assets/github.svg" link="https://github.com/UNordicc" text="UNordicc" />
            <SocialsEntry index={2} image="/assets/twitter.svg" link="https://twitter.com/UNordicc" text="@UNordicc" />
            <SocialsEntry index={3} image="/assets/twitter.svg" link="https://twitter.com/assfolder" text="@assfolder" />
            <SocialsEntry index={4} image="/assets/email.svg" link="mailto:unordic@unordic.me" text="unordic@unordic.me" />
            <SocialsEntry index={5} image="/assets/mastodon.svg" link="https://pol.social/@unordic" text="pol.social/@unordic" />
        </div>
    );
}

export default Socials;
