import Wallet from "./connect-button";
import "../stylesheets/navbar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="navbar">
      <a id="logo" href="/">
        <h1>Metavouch</h1>
      </a>
      <ul className="navigation">
        <li>
          <Link to="/">Explore</Link>
        </li>
        <li>
          <Link to="/create">Create Event</Link>
        </li>
        <li>
          <Link to="/exchange">Exchange</Link>
        </li>
      </ul>
      <Wallet />
    </nav>
  );
};

export default NavBar;
