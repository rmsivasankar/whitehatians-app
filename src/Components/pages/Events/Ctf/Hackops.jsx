import React from 'react';
import './Matrixz.css'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import RuleIcon from '@mui/icons-material/Rule';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Coord_list from '../../../../assets/javascript/coordinator-list';
import { Analytics } from "@vercel/analytics/react"

const Matrixz = () => {
    return (
        <>
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>HACKOPS</title>
                <link rel="canonical" href="https://www.whitehatians.in/matrixz-ctf" />
            </Helmet>
        </div>
            <div className='ctf'>
                <h2>HACKOPS</h2>
                <div className='ctf-section'>
                    <div className='ctf-event'>
                        <div className='ctf-about'>
                            <h3>ABOUT THE EVENT</h3>
                            <h4>JEOPARDY STYLE</h4>
                            <ul>
                                <li>OSINT</li>
                                <li>REVERSE ENGINEERING</li>
                                <li>CRYPTOGRAPHY</li>
                                <li>FORENSICS</li>
                                <li>BINARY EXPLOITATION</li>
                                <li>WEB EXPLOITATION</li>
                                <li>BOOT2ROOT</li>
                            </ul>
                        </div>
                    </div>
                    <div className='ctf-duration'>
                        <div className='prize'>
                            <h3>PRIZE POOL <span style={{color:"red"}}>₹4,500</span></h3>
                            <ul style={{color: "yellowgreen"}}>
                                <li>ENTRY FEE: ₹150</li>
                                <li>REFRESHMENTS WILL BE PROVIDED TO ALL PARTICIPANTS</li>
                            </ul>
                        </div>
                        <div className='time'>
                            <h3>SPONSORED BY</h3>
                            <p><Link style={{color:"#ff6949"}}  target='_blank' to="https://www.alteredsecurity.com/">ALTERED SECURITY</Link></p>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                        <div className='time'>
                            <h3>EVENT DURATION</h3>
                            <p>8 Hours</p>
                            <ul>
                                <li>9th September 2024</li>
                                <li>Starts at 10:00 AM</li>
                                <li>Ends at 6:00 PM</li>
                                <li>ADMIN BLOCK 2ND FLOOR</li>
                            </ul>
                        </div>
                    </div>
                    <div className='ctf-banner'>
                        <div className='prize'>
                            <h3>ENTRY RULES <RuleIcon style={{color: "skyblue"}} /></h3>
                            <ul style={{color: "yellowgreen"}}>
                                <li>Before the event, carefully read and understand the rules and guidelines provided by the organizers.</li>
                                <li>Do not interfere with the competition environment or other participants’ systems.</li>
                                <li>If you’re part of a team, maintain clear and effective communication with your teammates.</li>
                                <li>Always adhere to ethical hacking principles. Do not attempt to cheat, plagiarize, or use unauthorized methods to capture flags</li>
                            </ul>
                        </div>
                        <div className='register-btn'>
                            <Link target='blank_' to="https://forms.gle/m6XtmQnG4Ybn6NJc8">Register Now</Link>
                        </div>
                    </div>
                </div>
                <Analytics />
                <div className='queries'>
                    <div className='contact-num'>
                        <h3>FOR QUEREIES CONTACT:</h3>
                        <ul>
                            <li>Kavin : +91 8248451747</li>
                            <li>Sivasankar : +91 9042568655</li>
                            <li>Aravind: +91 7904747081</li>
                        </ul>
                    </div>
                    { /*
                        <div className='coordinator-details'>
                                {Coord_list.map((cord_list,index) => {
                                return <div className='c-details'>
                                    <img key={index} src={cord_list.avatar} />
                                    <p key={index}>{cord_list.name}</p>
                                    </div>
                                })}
                            </div>
                    */ }
                </div>
            </div>
        </>
    );
}

export default Matrixz;
