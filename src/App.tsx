import NavBar from "./components/navbar";
import EventList from "./components/event-card";

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
