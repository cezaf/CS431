import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import React, { useState } from "react";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from '@nextui-org/tooltip';

// add location + make CSS for each event block
const events = [
  {
    "title": "Acapella Sampler",
    "start": "2022-09-09T19:00:00",
    "end": "2022-09-09T23:00:00",
  "description": "First Weekend",
    "location": "Lorimer Chapel"
   },
   {
    "title": "Sledding",
    "start": "2023-01-23T15:00:00",
    "end": "2023-01-23T16:00:00",
  "description": "Sport",
    "location": "Lorimer Chapel"
   }
]

export function Lorimer() {
  return (
    <div id='calendar'>
      <h1 id='building_name'>Lorimer Chapel</h1>
      <FullCalendar
        eventTimeFormat={{
            hour: "numeric",
            minute: "2-digit",
            meridiem: "short",
          }}
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        displayEventEnd={true}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  )
}

function renderEventContent(eventInfo) {
  return (
    <div>
      <Tooltip showArrow={true} content={
        <div id='event'>
          <h3>{eventInfo.event.title}</h3>
          <i>{eventInfo.timeText} at {eventInfo.event.extendedProps.location}</i>
          <p>Event Tag: {eventInfo.event.extendedProps.description}</p>
        </div>
        }>
      <b id='event_title'>{eventInfo.event.title}</b>
      </Tooltip>
    </div>
  )
}

export default Lorimer;