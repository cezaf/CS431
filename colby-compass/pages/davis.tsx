import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const events = [
  { title: 'CS Advisory Board Meeting', start: '2024-03-21T19:00:00', end: '2024-03-21T20:00:00'},
  { title: 'CS Movie Night', start: '2024-03-08T20:00:00', end: '2024-03-08T22:00:00'},
  { title: 'CS Advisory Board Meeting', start: '2024-04-03T20:00:00', end: '2024-04-03T22:00:00'},
  { title: 'CS Game Night', start: '2024-04-04T20:00:00', end: '2024-04-04T22:00:00'},
  { title: 'WiMaCS Movie Night', start: '2024-04-05T19:00:00', end: '2024-04-05T21:00:00'}
]

export function DemoApp() {
  return (
    <div>
      <h1>Davis Science Center</h1>
      <FullCalendar
        eventTimeFormat={{
            hour: "numeric",
            minute: "2-digit",
            meridiem: false,
          }}
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  )
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      
      <Link href="/event_info" className={`${styles.btn}`}>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </Link>
      
    </>
  )
}

export default DemoApp;