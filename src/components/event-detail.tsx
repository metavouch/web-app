import events from "../assets/events.json";
import { useParams } from "react-router";

import "../stylesheets/event-detail.scss";

// {
//   "title": "My Event",
//   "location": "Los Angeles",
//   "date": "May 22, 2022",
//   "background":
//     "https://carbon-media.accelerator.net/0000000kYBW/cZmx7wMomqubLFH1LW9LCC;1543x2160.jpeg"
// },

const EventPage = () => {
  let { id } = useParams<{ id: string }>();
  const event = events[parseInt(id)];

  if (!event) {
    return <h1>Not exist ser</h1>;
  }

  return (
    <main id="event-view">
      <section>
        <img className="card" src={event.background} alt={event.title} />
      </section>
      <section className="details">
        <h1>{event.title}</h1>
        <h3>{event.date} | {event.location}</h3>
        <p>{event.description}</p>
      </section>
    </main>
  );
};

export default EventPage;
