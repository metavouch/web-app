import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";

import "../stylesheets/wallet-view.scss";

const WalletView = () => {
  const { isAuthenticated, isInitialized, Moralis } = useMoralis();
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    if (isInitialized) {
      Moralis.Web3.getNFTs({ chain: "rinkeby" }).then(setNfts);
    }
  }, [isInitialized, Moralis]);

  if (!isInitialized) {
    return null;
  }

  if (!isAuthenticated) {
    return (
      <main id="wallet-view">
        <p>You need to connect to view your tickets.</p>
      </main>
    );
  }

  return (
    <main id="wallet-view">
      {nfts.map((nft: any, index: number) => {
        return (
          <a href={nft.token_uri} className="card" key={index}>
            <h1>{nft.name || "Unknown Ticket"}</h1>
          </a>
        );
      })}
    </main>
  );
};

export default WalletView;
