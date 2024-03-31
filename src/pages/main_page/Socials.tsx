import { FunctionComponent } from "react";
import './greeting.css';
import SocialsEntry from './SocialsEntry';

const Socials: FunctionComponent = () => {
    return (
        <div className="greeting-socials">
            <SocialsEntry index={0} image="/assets/discord.svg" link="https://discord.com/users/265102629082890240" text={"UNordic"} />
            <SocialsEntry index={1} image="/assets/github.svg" link="https://github.com/UNordicc" text="UNordicc" />
            <SocialsEntry index={2} image="/assets/x.svg" link="https://twitter.com/UNordicc" text="@UNordicc" />
            <SocialsEntry index={3} image="/assets/download.svg" link="https://bsky.app/profile/finlands.pl" text="@finlands.pl" />
            <SocialsEntry index={4} image="/assets/spacehey_icon_white.png" link="https://spacehey.com/unordic" text="UNordic" />
            <SocialsEntry index={5} image="/assets/mastodon.svg" link="https://101010.pl/@unordic" text="@unordic@101010.pl" />
            <SocialsEntry index={6} image="/assets/truth-social.svg" link="https://truthsocial.com/@unordic" text="@unordic" />
        </div>
    );
}

export default Socials;
