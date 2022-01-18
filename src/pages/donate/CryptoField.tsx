import { FunctionComponent, useCallback, useState } from "react";

function generateShortAddress(addr: string, count: number): string {
  if (count >= addr.length / 2) return addr;
  return `${addr.substring(0, count)}..${addr.substring(
    addr.length,
    addr.length - count
  )}`;
}

function copy(text: string) {
  navigator.clipboard.writeText(text);
}

type Props = {
  name: string;
  image: string;
  address: string;
};

const CryptoField: FunctionComponent<Props> = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [addr, setAddr] = useState(generateShortAddress(props.address, 8));
  const [showCopyEffects, setShowCopyEffects] = useState(true);
  const [copyImg, setCopyImg] = useState('/assets/copy.svg');

  return (
    <div className="crypto-container-outer">
      <div className="crypto-container">
        <div style={{ width: "32px", justifyContent: "center", display: "flex" }}>
          <img className="currency-img" src={props.image} />
        </div>
          <code>{props.name}</code>
      </div>
      <div className="crypto-address-part">
        <code
            className={`crypto-address ${
            collapsed ? "crypto-address-collapsed" : ""
            }`}
            onClick={() => {
                if (!collapsed) return;
                setCollapsed(false);
                setAddr(props.address);
            }}
        >
            {addr}
        </code>
        <img
            onClick={() => {
                if (!showCopyEffects) return;
                const oldCopyImg = copyImg;
                copy(props.address);
                setShowCopyEffects(false);
                setCopyImg('/assets/check-bold.svg');
                setTimeout(() => {
                    setShowCopyEffects(true);
                    setCopyImg(oldCopyImg);
                }, 500);
            }}
            className={`copy-button ${showCopyEffects ? 'copy-button-effects' : ''}`}
            src={copyImg}
        />
        </div>
    </div>
  );
};

export { CryptoField };
