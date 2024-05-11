import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import React, { useState } from "react";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from '@nextui-org/tooltip';
import DATA from './data.json';

// add location + make CSS for each event block
const events = [
  {
    title: "Movie (Nope)",
    start: "2022-09-08T20:30:00",
    end: "2022-09-08T22:30:00",
    description: "SPB Movie Night",
    location: "Dana"
   },
   {
    title: "Hydration Station",
    start: "2023-03-10T22:30:00",
    end: "2023-03-10T6:30:00",
    description: "Doghead Fuel",
    Location: "Dana"
   },
   {
    title: "Late Night FOOD",
    start: "2023-03-11T23:00:00",
    end: "2022-09-08T3:00:00",
    description: "Sponsored by SPB",
    location: "Dana"
   },
   {
    title: "Student Breakfast in Dana",
    start: "2023-03-11T6:00:00",
    end: "2023-03-11T10:00:00",
    description: "Doghead Breakfast",
    location: "Dana"
   },
   {
    "Date": "2022-09-08",
    title: "Movie (Nope)",
    start: "2022-09-08T20:30:00",
    end: "22:30:00",
    description: "Start of Year Movie",
    location: "Dana"
   },
]

export function Dana() {
  return (
    <div id='calendar'>
      <h1 id='building_name'>Dana Hall</h1>
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

export default Dana;