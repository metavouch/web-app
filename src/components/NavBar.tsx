import ConnectButton from "./ConnectButton";

const NavBar = () => {
  return (
    <nav>
      <a id="logo" href="/">
        <h1>Metavouch</h1>
      </a>
      <ul className="navigation">
        <li>
          <a href="/">Explore</a>
        </li>
        <li>
          <a href="/">Create Event</a>
        </li>
        <li>
          <a href="/">Exchange</a>
        </li>
      </ul>
      <ul id="connect">
        <li>
          <ConnectButton />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
