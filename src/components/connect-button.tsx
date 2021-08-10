import React from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { useMoralis } from "react-moralis";

import "../stylesheets/forms.scss";
import "../stylesheets/modals.scss";
import metamaskLogo from "../images/metamask-logo.svg";
import walletconnectLogo from "../images/walletconnect-circle-blue.svg";

const ConnectButton: React.FC = () => {
  const { authenticate, logout, isAuthenticated } = useMoralis();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
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
        <button onClick={() => authenticate()}>
          <img src={metamaskLogo} alt="Connect with MetaMask" />
        </button>
        <button onClick={() => authenticate({ provider: "walletconnect" })}>
          <img src={walletconnectLogo} alt="Connect with WalletConnect" />
        </button>
      </Modal>
    </>
  );
};

export default ConnectButton;
