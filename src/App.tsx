import NavBar from "./components/navbar";
import EventList from "./components/event-card";
import { MoralisProvider } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateEventForm from './components/create-event-form';

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
          <Route path="/create">
            <CreateEventForm />
          </Route>
          <Route path="/exchange">
          </Route>
          <Route path="/">
            <EventList />
          </Route>
        </Switch>
      </Router>
    </MoralisProvider>
  );
}

export default App;
