import React from 'react';
import './Home.css'
import WH from '../../../assets/Logo/Logo.png'
import cover1 from '../../../assets/cover/cover1.jpg'
import cover2 from '../../../assets/cover/cover2.jpeg'
import { Link } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Groups3Icon from '@mui/icons-material/Groups3';
import CollectionsIcon from '@mui/icons-material/Collections';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PaidIcon from '@mui/icons-material/Paid';
import Event_list from '../../../assets/javascript/events-list';
import images_list from '../../../assets/javascript/images-list';
import Sponsor_list from '../../../assets/javascript/sponsor-list';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="https://www.whitehatians.in/" />
            </Helmet>
        </div>
            <div className='hero-section' id='home'>
                <h1>SRM VALLIAMMAI ENGINEERING COLLEGE</h1>
                <h2>DEPARTMENT OF CYBER SECURITY</h2>
                <div className='hero'>
                    <div className='hero-left'>
                        <img src={WH}></img>
                    </div>
                    <div className='hero-right'>
                        <h2>WHITEHATIANS CLUB</h2>
                        <p>Empowering students with cutting-edge cybersecurity knowledge and skills to foster a secure digital future.</p>
                        <p>To cultivate a community of ethical hackers dedicated to learning, innovation, and collaboration in cybersecurity.</p>
                        <ul>
                            <li><Link target='blank_' to="https://www.facebook.com/whitehatians"><FacebookOutlinedIcon fontSize='large' style={{ color: "#4267B2" }} /></Link></li>
                            <li><Link target='blank_' to="https://www.instagram.com/whitehatians"><InstagramIcon fontSize='large' style={{ color: "#E1306C" }} /></Link></li>
                            <li><Link target='blank_' to="https://www.youtube.com/@whitehatians"><YouTubeIcon fontSize='large' style={{ color: "#FF0000" }} /></Link></li>
                            <li><Link target='blank_' to="https://in.linkedin.com/company/whitehatians"><LinkedInIcon fontSize='large' style={{ color: "#1DA1F2" }} /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='info-section'>
                <h2>THE CLUB <Groups3Icon fontSize='large' style={{ color: "#ff8c8c"}} /></h2>
                <div className='info'>
                    <div className='info-bar'>
                        <img src={cover1} alt='cover'></img>
                        <p>The<span> White Hatians Club</span> is a technical club under the Cyber Security department.  The main goal of this club is to provide a technical opportunity for students to broaden their knowledge in the area of Cyber Security and to interact with other students who have a shared interest in cyber security.
                        </p>
                    </div>
                    <div className='info-bar'>
                        <p>Through the club’s activities, members can also network with professionals in the field, gain hands-on experience, and prepare for careers in cyber security. Many events can be conducted to enhance the knowledge of the students in a competitive way.
                        </p>
                        <img src={cover2} alt='cover'></img>
                    </div>
                </div>
            </div>
            <div className='upcoming-events'>
                <h2>UPCOMING EVENTS<CalendarMonthOutlinedIcon fontSize='large' style={{color: "cc846e"}} /></h2>
                <div className='event-grid'>
                {Event_list.map((event_l,index) => {
                    return <div className='event'>
                            <img key={index} src={event_l.event_image} />
                            <div class="overlay">
                                <h3 key={index}>{event_l.event_title}</h3>
                                <p key={index}>{event_l.event_description}</p>
                                <Link key={index} to={event_l.reg_link}>Learn More</Link>
                        </div>
                    </div>
                    })}
                </div>
            </div>
            <div className='gallery'>
                <h2>GALLERY<CollectionsIcon fontSize='large' /></h2>
                <div className='gallery-grid'>
                    <div className='grid-g'>
                        {images_list.map((images_l,index) => {
                            return <img className='g-image' key={index} src={images_l.images} alt='Images' />
                        })}
                    </div>
                </div>
            </div>
            <div className='sponsor'>
                <h2>SPONSOR<PaidIcon /></h2>
                <div className='sponsor-list'>
                    {Sponsor_list.map((sponsor_l,index) => {
                        return <div className='list'>
                        <img key={index} src={sponsor_l.logo} alt={sponsor_l.c_name} />
                        <p key={index}><Link key={index} to={sponsor_l.c_link} target='blank_'>{sponsor_l.c_name}</Link></p> 
                        </div>
                    })}
                </div>
            </div>
        </>
    );
}

export default Home;
