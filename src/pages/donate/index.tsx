import { FunctionComponent } from "react";
import { CryptoField } from './CryptoField';
import './donate.css';

const ADDRESSES = {
    xmr: "87eQbhUqmtF3mZxXvNG6h5d8zognD1NMoFCUZndXyfzABh8UsKv5ikC4H5EMgDrYA7hK2SH1Sugw9PyGGg3fzjB4Sh5KBFJ",
    btc: "bc1qreryh89wnx3d5af9s5w48jvv8eazx4cuyqqrwa",
    eth: "0x72f9218ED66feC7F8deFea89B5998bE5A90Da489",
}

const index: FunctionComponent = () => {
    return (
        <div className="donate-container">
            <div style={{ width: "100%", height: "48px" }} />
            <h1 className="donate-header">Want to send me money for some reason?</h1>
            <p className="donate-text">
                To be clear - I don't expect anyone to give their hard earned money to me.
                However, if you do want to donate some, be it because you want to support
                one of my projects or just because you're a cool person, I can only accept
                crypto for legal and privacy reasons.
                <p>Thank you!</p>
            </p>
            <CryptoField name="Monero" image="/assets/monero.png" address={ADDRESSES.xmr} />
            <CryptoField name="Bitcoin" image="/assets/bitcoin.png" address={ADDRESSES.btc} />
            <CryptoField name="ETH / ETC / MATIC" image="/assets/ethereum.png" address={ADDRESSES.eth} />
        </div>
    );
}

export default index;
