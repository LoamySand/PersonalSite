import React, {Component} from 'react'
import { formatDate, Calendar } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils.js'

// var calendarEl = document.getElementById('calendar');

// const calendar = new Calendar(calendarEl, {
//     plugins: [ googleCalendarPlugin ],
//     googleCalendarApiKey: 'AIzaSyA30Zt-beXsF02K8OWDnGjil47zc6vwIJI',
//     events: {
//         googleCalendarId: 'https://calendar.google.com/calendar/embed?src=laneeboyd%40gmail.com&ctz=America%2FChicago'
//     }
// });
// calendar.render();
const Schedule= () => {
    return(
        <FullCalendar
            plugins={[timeGridPlugin, googleCalendarPlugin]}
            initialView="timeGridWeek"
            googleCalendarApiKey='AIzaSyA30Zt-beXsF02K8OWDnGjil47zc6vwIJI'
            events={
                {googleCalendarId: 'https://calendar.google.com/calendar/ical/laneeboyd%40gmail.com/public/basic.ics', className: 'gcal-events'}
            }
        />
    );
}
export default Schedule;

//     renderSidebar() {
//         return (
//             <div className='demo-app-sidebar'>
//                 <div className='demo-app-sidebar-section'>
//                     <h2>Instructions</h2>
//                     <ul>
//                         <li>Select dates and you will be prompted to create a new event</li>
//                         <li>Drag, drop, and resize events</li>
//                         <li>Click an event to delete it</li>
//                     </ul>
//                 </div>
//                 <div className='demo-app-sidebar-section'>
//                     <label>
//                         <input
//                             type='checkbox'
//                             checked={this.state.weekendsVisible}
//                             onChange={this.handleWeekendsToggle}
//                         ></input>
//                         toggle weekends
//                     </label>
//                 </div>
//                 <div className='demo-app-sidebar-section'>
//                     <h2>All Events ({this.state.currentEvents.length})</h2>
//                     <ul>
//                         {this.state.currentEvents.map(renderSidebarEvent)}
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
//
//     handleWeekendsToggle = () => {
//         this.setState({
//             weekendsVisible: !this.state.weekendsVisible
//         })
//     }
//
//     handleDateSelect = (selectInfo) => {
//         let title = prompt('Please enter a new title for your event')
//         let calendarApi = selectInfo.view.calendar
//
//         calendarApi.unselect() // clear date selection
//
//         if (title) {
//             calendarApi.addEvent({
//                 id: createEventId(),
//                 title,
//                 start: selectInfo.startStr,
//                 end: selectInfo.endStr,
//                 allDay: selectInfo.allDay
//             })
//         }
//     }
//
//     handleEventClick = (clickInfo) => {
//        // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
//             clickInfo.event.remove()
//         // }
//     }
//
//     handleEvents = (events) => {
//         this.setState({
//             currentEvents: events
//         })
//     }
//
// }
//
// function renderEventContent(eventInfo) {
//     return (
//         <>
//             <b>{eventInfo.timeText}</b>
//             <i>{eventInfo.event.title}</i>
//         </>
//     )
// }
//
// function renderSidebarEvent(event) {
//     return (
//         <li key={event.id}>
//             <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
//             <i>{event.title}</i>
//         </li>
//     )
// }
