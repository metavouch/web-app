import { useMoralis } from "react-moralis";
import "../stylesheets/forms.scss";

function ConnectButton() {
  const { authenticate, isAuthenticated } = useMoralis();

  const buttonContent = isAuthenticated ? (
    <button>View Wallet</button>
  ) : (
    <button onClick={() => authenticate()}>Connect Wallet</button>
  );

  return buttonContent;
}

export default ConnectButton;
