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
    "title": "Grouda boys",
    "start": "2022-08-31T19:00:00",
    "end": "2022-08-31T22:30:00",
  "description": "Food Truck",
    "location": "Eustis Lot"
   },
   {
    "title": "Road Warrior Pizza",
    "start": "2022-09-04T20:00:00",
    "end": "2022-09-04T22:00:00",
  "description": "Orientation ",
    "location": "Eustis Lot"
   },
   {
    "title": "Beach Betty",
    "start": "2022-09-05T19:00:00",
    "end": "2022-09-05T23:00:00",
  "description": "Orientation ",
    "location": "Eustis Lot"
   },
   {
    "title": "Axe Throwing",
    "start": "2022-09-09T19:00:00",
    "end": "2022-09-09T22:00:00",
  "description": "First Weekend",
    "location": "Eustis Lot"
   },
   {
    "title": "Food Truck - Red Barn Food Truck",
    "start": "2022-09-09T22:00:00",
    "end": "2022-09-09T1:00:00",
  "description": "First Weekend",
    "location": "Eustis Lot"
   },
   {
    "title": "Club Fair  - Eight 8 Donut",
    "start": "2022-09-10T13:00:00",
    "end": "2022-09-10T16:00:00",
  "description": "First Weekend",
    "location": "Eustis Lot"
   },
   {
    "title": "Red Barn",
    "start": "2022-09-23T22:00:00",
    "end": "2022-09-23T1:00:00",
  "description": "Food Truck",
    "location": "Eustis Lot"
   },
   {
    "title": "Pizza Cone ",
    "start": "2022-09-24T22:00:00",
    "end": "2022-09-24T1:00:00",
  "description": "Food Truck",
    "location": "Eustis Lot"
   },
   {
    "title": "Sushi Food Truck - Mr. Tuna ",
    "start": "2022-09-30T23:00:00",
    "end": "2022-09-30T0:00:00",
  "description": "Food Truck",
    "location": "Eustis Lot"
   },
   {
    "title": "Late Night Food Truck: Pinky D's Poutine",
    "start": "2022-10-22T22:00:00",
    "end": "2022-10-22T1:00:00",
  "description": "Food Truck",
    "location": "Eustis Lot"
   },
   {
    "title": "Gouda Boys",
    "start": "2022-10-29T22:00:00",
    "end": "2022-10-29T1:00:00",
  "description": "Food Truck",
    "location": "Eustis Lot"
   },
   {
    "title": "Falafel Mafia Food Truck",
    "start": "2022-11-04T22:00:00",
    "end": "2022-11-04T0:00:00",
  "description":"Food Truck",
    "location": "Eustis Lot"
   }

]

export function Eustis() {
  return (
    <div id='calendar'>
      <h1 id='building_name'>Eustis Parking Lot</h1>
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

export default Eustis;