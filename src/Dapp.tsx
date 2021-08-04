import App from './App';
import { MoralisProvider } from "react-moralis";

function Dapp() {
  return (
    <MoralisProvider
      appId="Lha1izn3kc9AdoBp4FfI6ruxZdDZ9iIkIwmFxsgX"
      serverUrl="https://pbr26iwsgfom.usemoralis.com:2053/server"
    >
      <App />
    </MoralisProvider>
  );
}

export default Dapp;
