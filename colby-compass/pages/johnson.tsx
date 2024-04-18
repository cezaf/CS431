import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from '@nextui-org/tooltip';

interface Event {
  title: string;
  start: string; // Change the type if necessary
  end: string;   // Change the type if necessary
  description: string;
  location: string;
}

const Johnson: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      // Fetch events data from JSON file or API endpoint
      const response = await fetch('/data.json');
      const eventData: Event[] = await response.json();
      
      // Filter events for location "Johnson"
      const johnsonEvents = eventData.filter(event => event.location === "Johnson");

      // Set filtered events state
      setEvents(johnsonEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  // Render event content
  const renderEventContent = (eventInfo: any) => {
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
    );
  };

  return (
    <div id='calendar'>
      <h1 id='building_name'>Johnson Pond</h1>
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
  );
};

export default Johnson;
