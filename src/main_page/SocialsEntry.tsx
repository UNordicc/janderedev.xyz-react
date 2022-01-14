import { FunctionComponent, useEffect, useState } from "react";
import './greeting.css';

function reverse(value: string) {
  return Array.from(
    String(value || '')
  ).reverse().join('');
}

type Params = { image: string, link: string, text: string, redactUntilClick?: boolean, index: number };

const SocialsEntry: FunctionComponent<Params> = (params: Params) => {
    const [ content, setContent ] = useState(params.redactUntilClick ? 'Click to reveal' : params.text);
    const [ href, setHref ] = useState(params.redactUntilClick ? '#' : params.link);
    const [ allowClick, setAllowClick ] = useState(!params.redactUntilClick);
    const [ hidden, setHidden ] = useState(true);

    useEffect(() => {
        setTimeout(() => setHidden(false), 100 * params.index + 500);
    });

    return (
        <div className={`greeting-socials-container ${hidden ? 'hidden' : ''}`}>
            <img className="greeting-socials-image" src={params.image} />
            <a
                href={href}
                target={"_blank"}
                className={`greeting-socials-text`}
                onClick={params.redactUntilClick ? (event) => {
                    if (!allowClick) event.preventDefault();
                    setAllowClick(true);

                    // Lets hope that this stops most scrapers
                    setContent(reverse(atob(reverse(params.text))));
                    setHref(reverse(atob(reverse(params.link))));
                } : undefined}
            >
                {content}
            </a>
        </div>
    );
}

export default SocialsEntry;
