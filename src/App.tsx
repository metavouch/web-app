import NavBar from "./components/NavBar";
import EventList from "./components/EventCard";
import ConnectButton from "./components/ConnectButton";

import "./stylesheets/main.scss";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <EventList />
      </main>
    </>
  );
}

export default App;
