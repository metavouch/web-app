import React from 'react';
import { Card } from 'react-bootstrap';
// import styles from './exchange.scss'

interface IEventCardProps {
  title: String,
  location: String,
  date: Date,
  background: String,
  url: String,
}

const EventCardComp = ({
  title,
  location,
  date,
  background,
  url
}: IEventCardProps) => {


  return (
    <div className='main'>

    </div>
  );
}



export const EventCard = EventCardComp;