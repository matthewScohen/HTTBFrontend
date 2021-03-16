import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import React, {Component} from 'react'

import '../css/Calendar.css';


export default class EventCalendar extends Component {

    render() {
        return (
            <FullCalendar 
            id="calender"

            height="500px"

            defaultView="dayGridMonth" 
            plugins={[dayGridPlugin]}
            events={[
                // these events will need to be pulled from the 
                // admin console in one way or another, via database 
                // or local data/file
                { title: 'GBM Meeting 1', date: '2021-03-08'},
                { title: 'GBM Meeting 2', date: '2021-03-15'},
                { title: 'GBM Meeting 3', date: '2021-03-22'},
                { title: 'GBM Meeting 4', date: '2021-03-29'},
            ]}
            />
        )
    }

}

