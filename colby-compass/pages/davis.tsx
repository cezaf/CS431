import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import React, { useState } from "react";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from '@nextui-org/tooltip';

// add location + make CSS for each event block
const events = [
  { title: 'CS Advisory Board Meeting', start: '2024-03-21T19:00:00', end: '2024-03-21T20:00:00', description: "Description1", location: "Davis 301"},
  { title: 'CS Movie Night', start: '2024-03-08T20:00:00', end: '2024-03-08T22:00:00', description: "Description CS Movie Night", location: "Davis 102"},
  { title: 'CS Advisory Board Meeting', start: '2024-04-03T20:00:00', end: '2024-04-03T22:00:00', description: "Description 2 CS Advisory", location: "Davis 301"},
  { title: 'CS Game Night', start: '2024-04-04T20:00:00', end: '2024-04-04T22:00:00', description: "Description CS Game Night", location: "Davis 112"},
  { title: 'WiMaCS Movie Night', start: '2024-04-05T19:00:00', end: '2024-04-05T21:00:00', description: "Description WiMaCS Movie Night", location: "Davis 201"}
]

export function DemoApp() {
  return (
    <div>
      <h1>Davis Science Center</h1>
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
        <div>
          <b>Event Name: {eventInfo.event.title}</b>
          <p>Time: {eventInfo.timeText}</p>
          <p>Location: {eventInfo.event.extendedProps.location}</p>
          <p>Description: {eventInfo.event.extendedProps.description}</p>
        </div>
        }>
      <b>{eventInfo.event.title}</b>
      </Tooltip>
    </div>
  )
}

export default DemoApp;