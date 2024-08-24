import React from 'react';
import './Matrixz.css'
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
                <title>CODEWARS 2.0</title>
                <link rel="canonical" href="https://www.whitehatians.in/matrixz-ctf" />
            </Helmet>
        </div>
            <div className='ctf'>
                <h2>CODEWARS 2.0</h2>
                <div className='ctf-section'>
                    <div className='ctf-event'>
                        <div className='ctf-about'>
                            <h3>STYLING + ANIMATION</h3>
                            <h4>Evaluvation Criteria</h4>
                            <ul>
                                <li>CODE QUALITY</li>
                                <li>DESIGN AND AESTHETICS</li>
                                <li>ANIMATIONS</li>
                                <li>RESPONSIVENESS</li>
                            </ul>
                        </div>
                    </div>
                    <div className='ctf-duration'>
                        <div className='prize'>
                            <h3>PRIZE POOL <span style={{color:"red"}}>₹2,000</span></h3>
                            <ul style={{color: "yellowgreen"}}>
                                <li>CASH PRIZE</li>
                                <li>FOOD WILL BE PROVIDED TO ALL PARTICIPANTS</li>
                            </ul>
                        </div>
                        <div className='time'>
                            <h3>EVENT DURATION</h3>
                            <p>2 Hours</p>
                            <ul>
                                <li>24th August 2024</li>
                                <li>Starts at 10:30 AM</li>
                                <li>Ends at 12:00 PM</li>
                                <li>LAB 7 3rd FLOOR</li>
                            </ul>
                        </div>
                    </div>
                    <div className='ctf-banner'>
                        <div className='prize'>
                            <h3>ENTRY RULES <RuleIcon style={{color: "skyblue"}} /></h3>
                            <ul style={{color: "yellowgreen"}}>
                                <li>Eligibility: Open to all students and web enthusiasts.</li>
                                <li>HTML Markup: Modify only the provided HTML; no removal of elements.</li>
                                <li>Tools: Use any CSS frameworks or JS libraries for enhancements.</li>
                                <li>Design: Ensure responsiveness across devices and creative animations.</li>
                                <li>Submission: Submit all files (HTML, CSS, JS) by the deadline.</li>
                            </ul>
                        </div>
                        <div className='register-btn'>
                            <Link target='blank_' to="https://drive.google.com/file/d/1_sYe4n-IhqdtDg6cZCTtY741KjCH6hh7/view?usp=sharing">Download Files</Link>
                        </div>
                    </div>
                </div>
                <div className='queries'>
                    
                    {
                        /*
                        <div className='contact-num'>
                        <h3>FOR QUEREIES CONTACT:</h3>
                        <ul>
                            <li>+91 9042568655</li>
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
                         */
                    }
                </div>
            </div>
        </>
    );
}

export default Matrixz;
