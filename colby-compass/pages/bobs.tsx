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
    "title": "Live Band, Lawn Games, & S'mores Cart",
    "start": "2022-09-06T18:00:00",
    "end": "2022-09-06T21:00:00",
  "description": "Orientation ",
    "location": "Roberts"
   },
   {
    "title": "Bus to Portland",
    "start": "2023-01-22T10:00:00",
    "end": "2023-01-22T11:00:00",
  "description": "Transportation",
    "location": "Roberts"
   },
   {
    "title": "Senior Only Breakfast in Bob's",
    "start": "2023-03-11T6:00:00",
    "end": "2023-03-11T10:00:00",
  "description": "Food", 
    "location": "Roberts"
   }
]

export function Bobs() {
  return (
    <div id='calendar'>
      <h1 id='building_name'>Roberts Hall</h1>
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

export default Bobs;