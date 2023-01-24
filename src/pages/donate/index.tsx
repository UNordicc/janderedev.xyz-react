import { FunctionComponent } from "react";
import { CryptoField } from './CryptoField';
import './donate.css';

const ADDRESSES = {
    xmr: "4BBEM3MHtFfPAVwgQ5CRJiFdp2zVbF6aL3RKX1w6RnfjbW3L3RFaknc9bbnGrAFAZG2N6XpsGwpMn9yajG1mDfkr6X7MUgD",
    btc: "33dc7D5xgoF9fSXoWwwf7phoSkNMw6WExR",
    eth: "0xd68e47e7593902fDfAa77E650fEcbB133369058F",
}

const index: FunctionComponent = () => {
    return (
        <div className="donate-container">
            <div style={{ width: "100%", height: "48px" }} />
            <h1 className="donate-header">Want to send me money for some reason?</h1>
            <p className="donate-text">
                You can donate me via crypto. &gt I use these to donate
            </p>
            <CryptoField name="Monero" image="/assets/monero.png" address={ADDRESSES.xmr} />
            <CryptoField name="Bitcoin" image="/assets/bitcoin.png" address={ADDRESSES.btc} />
            <CryptoField name="ETH/USDT/USDC image="/assets/ethereum.png" address={ADDRESSES.eth} />
        </div>
    );
}

export default index;
