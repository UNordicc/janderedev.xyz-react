import { FunctionComponent } from "react";
import { CryptoField } from './CryptoField';
import './donate.css';

const ADDRESSES = {
    btc: "33dc7D5xgoF9fSXoWwwf7phoSkNMw6WExR",
    eth: "0xd68e47e7593902fDfAa77E650fEcbB133369058F",
    ltc: "ltc1qq5v0mwt8yu789n20ltf6sz5s83se0ycfw6c4we",
}

const index: FunctionComponent = () => {
    return (
        <div className="donate-container">
            <div style={{ width: "100%", height: "48px" }} />
            <h1 className="donate-header">Want to send me money for some reason?</h1>
            <p className="donate-text">
                Copy one of these addresses and send amount of money you want!
                If I don't support your favorite crypto or payment method, use <a href="https://bisq.network/">Bisq</a>, <a href="https://dex.robosats.com/">Robosats</a> or <a href="https://haveno.exchange/">Haveno</a> and buy there cryptocurrency without KYC.
                For PLN use <a href="https://coinget.pl/">coinGet</a> or <a href="https://coincher.com">coincher</a>
            </p>
            <CryptoField name="Bitcoin" image="/assets/bitcoin.png" address={ADDRESSES.btc} />
            <CryptoField name="Litecoin" image="/assets/litecoin.png" address={ADDRESSES.ltc} />
            <CryptoField name="ETH/USDT/USDC" image="/assets/ethereum.png" address={ADDRESSES.eth} />
        </div>
    );
}

export default index;
