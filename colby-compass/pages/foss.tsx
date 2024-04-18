import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from '@nextui-org/tooltip';

interface Event {
  title: string;
  start: string;
  end: string;
  description: string;
  location: string;
}

const Foss: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/data.json'); // Path to your JSON file
      const eventData: any[] = await response.json();
      const fossEvents: Event[] = eventData
        .filter(event => event.location === "Foss")
        .map(event => ({
          title: event["Program Title"],
          start: `${event.Date}T${event["Start Time"]}`,
          end: `${event.Date}T${event["End Time"]}`,
          description: `Attendance: ${event.Attendance}`,
          location: event.location
        }));
      setEvents(fossEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

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
      <h1 id='building_name'>Foss Dining Hall</h1>
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

export default Foss;
