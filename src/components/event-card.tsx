import IEvent from "../interfaces/event";
import "../stylesheets/explore.scss";
import { Link } from 'react-router-dom';

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const EventCard = (props: IEvent) => {
  return (
    <Link to={`/event/${props.id}`} className="card" style={{
      backgroundImage: `url(${props.background})`
    }}>
      <h2>{props.title}</h2>
      <p>
        {months[props.date.getMonth()]} {props.date.getDate()},{" "}
        {props.date.getFullYear()} | {props.location}
      </p>
    </Link>
  );
};

const EventList = () => {
  const events: IEvent[] = [
    {
      title: "My Event",
      location: "Los Angeles",
      date: new Date(2022, 2, 22),
      id: 1,
      background:
        "https://carbon-media.accelerator.net/0000000kYBW/cZmx7wMomqubLFH1LW9LCC;1543x2160.jpeg",
    },
    {
      title: "Malaa",
      location: "Sardine Can",
      date: new Date(2022, 2, 22),
      id: 2,
      background:
        "https://i.scdn.co/image/ab6761610000e5ebbcc0f9459c1b1f64f1fffcae",
    },
    {
      title: "My Event",
      location: "Los Angeles",
      date: new Date(2022, 2, 22),
      id: 3,
      background:
        "https://carbon-media.accelerator.net/0000000kYBW/cZmx7wMomqubLFH1LW9LCC;1543x2160.jpeg",
    },
    {
      title: "My Event",
      location: "Los Angeles",
      date: new Date(2022, 2, 22),
      id: 4,
      background:
        "https://carbon-media.accelerator.net/0000000kYBW/cZmx7wMomqubLFH1LW9LCC;1543x2160.jpeg",
    },
    {
      title: "My Event",
      location: "Los Angeles",
      date: new Date(2022, 2, 22),
      id: 5,
      background:
        "https://carbon-media.accelerator.net/0000000kYBW/cZmx7wMomqubLFH1LW9LCC;1543x2160.jpeg",
    },
  ];

  return (
    <section>
      {events.map((event) => {
        return <EventCard {...event} />;
      })}
    </section>
  );
};

export default EventList;
