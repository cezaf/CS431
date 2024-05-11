import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from '@nextui-org/tooltip';
import DATA from './data.json';

interface Event {
  title: string;
  start: string;
  end: string;
  description: string;
  location: string;
}
const event: Event = require('./data.json');
const events = DATA.find((event) => event.location === "Johnson");
// console.log(events);

// const all = require('./data.json');
// console.log("ALL", typeof(all));
// for(let item in all){
  

// }
// const events = all;
// var dataArray = JSON.parse(fs.readFileSync('data.json', 'utf-8'))

// const events = DATA.forEach(item => item.location === "Johnson");
// console.log(events);

export function Johnson() {
  return (
    <div id='calendar'>
      <h1 id='building_name'>Johnson Hall</h1>
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
        eventContent={renderEventContent(events)}
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

export default Johnson;