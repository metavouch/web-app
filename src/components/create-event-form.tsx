import { url } from 'inspector';
import React from 'react';

const EventForm = () => {
    return <form>
        <input type="text" name="title" id="title" placeholder="Event Title" />
        <textarea name="description" id="description" placeholder="Event Description"></textarea>
        <input type="datetime-local" name="datetime" id="datetime" />
    </form>;
}

// contract Event {
//     int ticketId;
//     string url;

//     Event() {
//         url = "ipfs://u3gh8u4gi23gu4g2u3iu4g/{id}.json"
//     }
// }

// {
//     "title": "General Admissioin",
//         "type": "ticket",
//             "description": "General Admissioin gets access to all stages",
//                 "properties": {
//         "name": {
//             "type": "string",
//                 "description": "Identifies the event to which this NFT represents"
//         },
//         "description": {
//             "type": "string",
//                 "description": "Describes the event to which this NFT represents"
//         },
//         "image": {
//             "type": "string",
//                 "description": "ipfs://QmRAQB6faCyidP37UdDnjFY5vQuiBrcqdyoW1CuDgwxkD4"
//         }
//     }
// }

export default EventForm;
