import React from 'react';
import Navbar from './navbar';
import events from '../assets/events.json';
import { useParams } from 'react-router';

const EventPage = () => {
  const eventArr = [];
  eventArr.push(events);

  console.log('eventArr', eventArr);

  let event: any = useParams();
  let idMatch = false;

  console.log('event id from url: ', event.id);

  for (const i of eventArr) {
    console.log('i', i['event 1']);
    console.log('event id inside loop: ', event.id);
    if (
      i['event 1'].id === event.id ||
      i['event 2'].id === event.id ||
      i['event 3'].id === event.id ||
      i['event 5'].id === event.id
    ) {
      idMatch = true;
    } else {
      idMatch = false;
      console.log('fuck');
    }
  }

    console.log('id match?', idMatch);



    return (
      <>

      </>
    );
  }

  export default EventPage;