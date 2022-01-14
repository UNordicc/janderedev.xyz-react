import { FunctionComponent, useState } from "react";
import './greeting.css';

type Params = { image: string, link: string, text: string, redactUntilClick?: boolean };

const SocialsEntry: FunctionComponent<Params> = (params: Params) => {
    const [ content, setContent ] = useState(params.redactUntilClick ? 'Click to reveal' : params.text);
    const [ href, setHref ] = useState(params.redactUntilClick ? '#' : params.link);
    const [ allowClick, setAllowClick ] = useState(!params.redactUntilClick);

    return (
        <div className="greeting-socials-container">
            <img className="greeting-socials-image" src={params.image} />
            <a
                href={href}
                className="greeting-socials-text"
                onClick={params.redactUntilClick ? (event) => {
                    if (!allowClick) event.preventDefault();
                    setContent(params.text);
                    setHref(params.link);
                    setAllowClick(true);
                } : undefined}
            >
                {content}
            </a>
        </div>
    );
}

export default SocialsEntry;
