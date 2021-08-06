import NavBar from "./components/navbar";
import EventList from "./components/event-card";
import EventPage from "./components/event-page";
import { MoralisProvider } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
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
        <Route path="/event/:id" children={<EventPage />} />
          <Route path="/create">
            <CreateEventForm />
          </Route>
          <Route path="/exchange">
          </Route>
          <Route exact path="/">
            <EventList />
          </Route>
        </Switch>
      </Router>
    </MoralisProvider>
  );
}

export default App;
