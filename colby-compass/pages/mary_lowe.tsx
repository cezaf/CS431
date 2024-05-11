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
    "title": "Marylow Coffee House SNL ",
    "start": "2022-11-05T20:00:00",
    "end": "2022-11-05T22:00:00",
  "description":"Concert/Live Music",
    "location": "Marylow Coffeehouse"
   },
   {
    "title": "Learn to Latte Art",
    "start": "2023-01-05T16:00:00",
    "end": "2023-01-05T18:00:00",
  "description": "Coffee",
    "location": "Marylow Coffeehouse"
   }
]

export function Mary_Lowe() {
  return (
    <div id='calendar'>
      <h1 id='building_name'>Mary Low Coffeehouse</h1>
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

export default Mary_Lowe;