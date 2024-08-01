import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
    return (
        <footer>
            <div className='footer-sec' id='contact'>
                <div className='contact'>
                    <h3>Contact</h3>
                    <ul>
                        <li>Mail: info@whitehatians.in</li>
                    </ul>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1732.9182647089262!2d80.04054448819768!3d12.825830323719034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f70d79722631%3A0x49afcd4648f94894!2sSRM%20Valliammai%20Engineering%20College!5e0!3m2!1sen!2sin!4v1721127294857!5m2!1sen!2sin" width="200" height="100" style={{border: "0"}} allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Google maps'></iframe>
                </div>
                <div className='pages'>
                    <h3>Pages</h3>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/office-bearers">Ofiice Bearers</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/news">News</Link></li>
                    </ul>
                </div>
                <div className='social'>
                    <h3>Social Links</h3>
                    <ul>
                    <li><Link target='blank_' to="https://www.facebook.com/whitehatians"><FacebookOutlinedIcon fontSize='large' style={{ color: "#4267B2" }} /></Link></li>
                            <li><Link target='blank_' to="https://www.instagram.com/whitehatians"><InstagramIcon fontSize='large' style={{ color: "#E1306C" }} /></Link></li>
                            <li><Link target='blank_' to="https://www.youtube.com/@whitehatians"><YouTubeIcon fontSize='large' style={{ color: "#FF0000" }} /></Link></li>
                            <li><Link target='blank_' to="https://in.linkedin.com/company/whitehatians"><LinkedInIcon fontSize='large' style={{ color: "#1DA1F2" }} /></Link></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='right'>
                <p>© 2024 All Rights Reserved</p>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Security</li>
                    <li>Terms and conditions</li>
                </ul>
            </div> 
        </footer>
    );
}

export default Footer;
