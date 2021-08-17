import NavBar from "./components/navbar";
import Explore from "./components/explore";
import EventDetail from "./components/event-detail";
import WalletView from "./components/ticket-wallet";
import ScrollToTop from "./components/helpers/scroll-to-top";
import { MoralisProvider } from "react-moralis";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateEventForm from "./components/create-event-form";

import "./stylesheets/main.scss";

function App() {
  return (
    <MoralisProvider
      appId="Lha1izn3kc9AdoBp4FfI6ruxZdDZ9iIkIwmFxsgX"
      serverUrl="https://pbr26iwsgfom.usemoralis.com:2053/server"
    >
      <Router>
        <NavBar />
        <Switch>
          <Route path="/event/:id">
            <ScrollToTop />
            <EventDetail />
          </Route>
          <Route path="/create">
            <CreateEventForm />
          </Route>
          <Route path="/exchange">
            <WalletView />
          </Route>
          <Route exact path="/">
            <Explore />
          </Route>
        </Switch>
      </Router>
    </MoralisProvider>
  );
}

export default App;
