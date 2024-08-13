import React from 'react';
import './Events.css'
import { Link } from 'react-router-dom';
import Event_list from '../../../assets/javascript/events-list';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Comp_event from '../../../assets/javascript/completed-event';
import { Helmet } from 'react-helmet';

const Events = () => {
    return (
        <>
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Events</title>
                <link rel="canonical" href="https://www.whitehatians.in/events" />
            </Helmet>
        </div>
            <div className='upcoming-events'>
                <h2>UPCOMING EVENTS<CalendarMonthOutlinedIcon fontSize='large' style={{color: "#cc846e"}} /></h2>
                <div className='event-grid'>
                {Event_list.map((event_l,index) => {
                    return <div className='event'>
                            <img key={index} src={event_l.event_image} />
                            <div class="overlay">
                                <h3 key={index}>{event_l.event_title}</h3>
                                <p key={index}>{event_l.event_description}</p>
                                <Link key={index} to={event_l.reg_link} target="_blank">REGISTER NOW</Link>
                        </div>
                    </div>
                })}
            </div>
        </div>
        <div className='completed-events'>
                <h2>COMPLETED EVENTS<CalendarMonthOutlinedIcon fontSize='large' style={{color: "#8f8f8f"}} /></h2>
                <div className='event-grid1'>
                {Comp_event.map((comp_l,index) => {
                    return <div className='event1'>
                            <img key={index} src={comp_l.event_image} />
                            <div class="overlay1">
                                <h3 key={index}>{comp_l.event_title}</h3>
                                <p key={index}>{comp_l.event_description}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
        </>
    );
}

export default Events;
