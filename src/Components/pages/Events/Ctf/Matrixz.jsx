import React from 'react';
import './Matrixz.css'
import banner from '../../../../assets/events/1.jpg'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import RuleIcon from '@mui/icons-material/Rule';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Coord_list from '../../../../assets/javascript/coordinator-list';

const Matrixz = () => {
    return (
        <>
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Matrixz CTF</title>
                <link rel="canonical" href="https://www.whitehatians.in/matrixz-ctf" />
            </Helmet>
        </div>
            <div className='ctf'>
                <h2>MATRIXZ CTF</h2>
                <div className='ctf-section'>
                    <div className='ctf-event'>
                        <div className='ctf-about'>
                            <h3>ABOUT THE EVENT</h3>
                            <h4>JEOPARDY CTF</h4>
                            <ul>
                                <li>WEB EXPLOITATION</li>
                                <li>OSINT</li>
                                <li>CRYPTOGRAPHY</li>
                                <li>REVERSE ENGINEERING</li>
                                <li>FORENSICS</li>
                                <li>BINARY EXPLOITATION</li>
                            </ul>
                        </div>
                    </div>
                    <div className='ctf-duration'>
                        <div className='prize'>
                            <h3>PRIZE POOL <span style={{color:"red"}}>₹4,500</span></h3>
                            <ul style={{color: "yellowgreen"}}>
                                <li>CASH PRIZE</li>
                                <li>REFRESHMENTS WILL BE PROVIDED TO ALL PARTICIPANTS</li>
                            </ul>
                        </div>
                        <div className='prize'>
                            <h3>ENTRY FEE <ConfirmationNumberIcon style={{color: "skyblue"}} /> </h3>
                            <ul style={{color: "yellowgreen"}}>
                                <li>Per Team : <span style={{color: "red"}}>₹149</span></li>
                            </ul>
                        </div>
                        <div className='time'>
                            <h3>EVENT DURATION</h3>
                            <p>6 Hours CTF</p>
                            <ul>
                                <li>9th August 2024</li>
                                <li>Starts at 9 AM</li>
                                <li>Ends at 3 PM</li>
                                <li>OLD SEMINAR HALL 2ND FLOOR</li>
                            </ul>
                        </div>
                    </div>
                    <div className='ctf-banner'>
                        <div className='banner'>
                            <img src={banner} />
                        </div>
                        <div className='prize'>
                            <h3>ENTRY RULES <RuleIcon style={{color: "skyblue"}} /></h3>
                            <ul style={{color: "yellowgreen"}}>
                                <li>Do not attempt to exploit systems outside of the competition environment.</li>
                                <li>Work with your team without sharing solutions externally.</li>
                                <li>Avoid using excessive automated tools that might disrupt the challenge.</li>
                                <li>Do not target other participants or interfere with their activities.</li>
                                <li>Disclose any discovered vulnerabilities only through official channels.</li>
                            </ul>
                        </div>
                        <div className='register-btn'>
                            <Link target='blank_' to="https://forms.gle/p96GZ42XLqWKYmFh9">Register Now</Link>
                        </div>
                    </div>
                </div>
                <div className='queries'>
                    <div className='contact-num'>
                        <h3>FOR QUEREIES CONTACT:</h3>
                        <ul>
                            <li>+91 9042568655</li>
                            <li>+91 7904747081</li>
                        </ul>
                    </div>
                    <div className='coordinator-details'>
                        {Coord_list.map((cord_list,index) => {
                            return <div className='c-details'>
                                    <img key={index} src={cord_list.avatar} />
                                    <p key={index}>{cord_list.name}</p>
                        </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Matrixz;
