import events from "../assets/events.json";
import { Link } from "react-router-dom";

import "../stylesheets/explore.scss";

const EventCard = (props: any) => {
  return (
    <Link
      to={`/event/${props.id}`}
      className="card"
      style={{
        backgroundImage: `url("${props.background}")`,
      }}
    >
      <h2>
        {props.title} {props.key}
      </h2>
      <p>
        {props.date} | {props.location}
      </p>
    </Link>
  );
};

const Explore = () => {
  return (
    <section id="explore">
      {events.map((event, id) => {
        return <EventCard id={id} {...event} />;
      })}
    </section>
  );
};

export default Explore;
