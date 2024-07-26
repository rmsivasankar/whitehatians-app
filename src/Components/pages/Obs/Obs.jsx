import React from 'react'
import './Obs.css'
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import Obs_list from '../../../assets/javascript/obs-list';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Obs() {
  return (
    <>
            <div className='office-bearers'>
            <div className='staffs'>
            {Obs_list.map((obs_l,index) => {
                return  <div class="profile-cards">
                    <div class="imgs">
                        <img key={index} src={obs_l.image} />
                    </div>
                    <div class="captions">
                        <h3 key={index}>{obs_l.name}</h3>
                        <p key={index}>{obs_l.desg}</p>
                    <div class="social-linkss">
                        <Link key={index} to={obs_l.p_link}><LinkIcon style={{color: "white"}} fontSize='large' /></Link>
                        <Link key={index} to={obs_l.l_link}><LinkedInIcon style={{color: "#0c52a1"}} fontSize='large' /></Link>
                        <Link key={index} to={obs_l.i_link}><InstagramIcon style={{color: "#E1306C"}} fontSize='large' /></Link>
                    </div>
                    </div>
                    </div>
                    } )}
                </div>
            </div>
    </>
  )
}
