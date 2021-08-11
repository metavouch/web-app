import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { useMoralis } from "react-moralis";

import "../stylesheets/forms.scss";
import "../stylesheets/modals.scss";
import metamaskLogo from "../images/metamask-logo.svg";
import walletconnectLogo from "../images/walletconnect-circle-blue.svg";

const Wallet: React.FC = () => {
  const { authenticate, logout, isAuthenticated, user } = useMoralis();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const getWalletOptions = () => {
    let options = <></>;

    if (isAuthenticated) {
      options = (
        <div className="wallet-options-connected">
          <p>{user.attributes.accounts[0]}</p>
          <Link to="/" onClick={() => closeModal()}>Explore</Link>
          <Link to="/exchange" onClick={() => closeModal()}>My Tickets</Link>
          <Link to="/create" onClick={() => closeModal()}>Hosted Events</Link>
          <button onClick={() => logout().then(() => closeModal())}>
            Disconnect Wallet
          </button>
        </div>
      );
    } else {
      options = (
        <div className="wallet-options-disconnected">
          <button onClick={() => authenticate().then(() => closeModal())}>
            <img src={metamaskLogo} alt="Connect with MetaMask" />
          </button>
          <button
            onClick={() =>
              authenticate({ provider: "walletconnect" }).then(() =>
                closeModal()
              )
            }
          >
            <img src={walletconnectLogo} alt="Connect with WalletConnect" />
          </button>
        </div>
      );
    }

    return options;
  };

  const checkWalletStatus = () => {
    if (isAuthenticated) {
      return <span className="wallet-connected"></span>;
    } else {
      return <span className="wallet-disconnected"></span>;
    }
  };

  return (
    <>
      <div id="wallet-status">{checkWalletStatus()}</div>
      <button onClick={openModal}>
        <FontAwesomeIcon icon={faWallet} />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="overlay"
      >
        {getWalletOptions()}
      </Modal>
    </>
  );
};

export default Wallet;
