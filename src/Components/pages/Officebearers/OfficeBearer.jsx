import React from 'react';
import './OfficeBearer.css'
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import Staff_list from '../../../assets/javascript/staff-list'
import Ob_list from '../../../assets/javascript/ob-list';
import PersonIcon from '@mui/icons-material/Person';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Helmet } from 'react-helmet';

const OfficeBearer = () => {
    return (
        <>
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Office Bearers</title>
                <link rel="canonical" href="https://www.whitehatians.in/office-bearers" />
            </Helmet>
        </div>
            <div className='office-bearer'>
            <div className='staff'>
            {Staff_list.map((staff_l,index) => {
                return  <div class="profile-card">
                    <div class="img">
                        <img key={index} src={staff_l.image} />
                    </div>
                    <div class="caption">
                        <h3 key={index}>{staff_l.name}</h3>
                        <p key={index}>{staff_l.desg}</p>
                    <div class="social-links">
                        <Link key={index} to={staff_l.p_link}><LinkIcon style={{color: "white"}} fontSize='large' /></Link>
                        <Link key={index} to={staff_l.l_link}><LinkedInIcon style={{color: "#0c52a1"}} fontSize='large' /></Link>
                    </div>
                    </div>
                    </div>
                    } )}
                </div>
            </div>

            <div className='students'>
                <h1>DELEGATES<PersonIcon fontSize='large' /></h1>
                <div className='student'>
                    {Ob_list.map((ob_l,index) => {
                    return  <div class="profile-card1">
                        <div class="img1">
                            <img key={index} src={ob_l.image} />
                        </div>
                        <div class="caption1">
                            <h3 key={index}>{ob_l.name}</h3>
                            <p key={index}>{ob_l.desg}</p>
                        <div class="social-links1">
                            <Link key={index} to={ob_l.p_link}><LinkIcon style={{color: "white"}} fontSize='large' /></Link>
                            <Link key={index} to={ob_l.l_link}><LinkedInIcon style={{color: "#0c52a1"}} fontSize='large' /></Link>
                            <Link key={index} to={ob_l.i_link}><InstagramIcon fontSize='large' style={{ color: "#E1306C" }} /></Link>
                        </div>
                        </div>
                    </div>
                    } )}
                </div>
                <div className='more-members'>
                    <button><Link to="/all-ob">All Members</Link></button>
                </div>
            </div>
        </>
    );
}

export default OfficeBearer;
