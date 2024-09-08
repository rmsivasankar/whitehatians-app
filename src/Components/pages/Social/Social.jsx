import React, { useState } from 'react';
import WH from '../../../assets/Logo/Logo.png';
import as_logo from "../../../assets/Logo/alteredsecurity_logo.jpeg";
import gift from "../../../assets/Logo/gift_3620659.png";
import './Social.css';

export default function Social() {
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  return (
    <div className='whole'>
      <div className='hh'>
        <h1>WIN EXCITING MYSTERY GIFT 🎁 FOR TOP 10 PARTICIPANTS</h1>
        <h1 style={{ color: "red" }}>FOLLOW us in <span style={{ color: "skyblue" }}>LINKEDIN</span></h1>
      </div>
      <div className='company'>
        <img src={WH} alt="Whitehatians" />
        <h1>WHITEHATIANS</h1>
      </div>
      <div className='company'>
        <img src={as_logo} alt="Altered Security" />
        <h1>ALTERED SECURITY</h1>
      </div>
      <div className='rules'>
        <h1 style={{ color: 'greenyellow' }}>RULES 🎌</h1>
        <ol>
          <li>Update your event presence with a post of your team members 🐱‍👤 and ID card 🪪 in your LinkedIn.</li>
          <li>Participants should follow and tag both the LinkedIn pages.</li>
          <li>Those who have the maximum likes and interactions will be selected.</li>
        </ol>
      </div>
      <div className='gift' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={gift} alt="Gift" />
        <img src={gift} alt="Gift" />
        {showPopup && <div className='popup'>Mystery Gift will be revealed after one week of event completion</div>}
      </div>
    </div>
  );
}
