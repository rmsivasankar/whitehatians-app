import React from 'react';
import './About.css'
import srm_logo from '../../../assets/Logo/SRMgrouplogo.png'
import vall_logo from '../../../assets/Logo/val_logo.png'
import wh_logo from '../../../assets/Logo/Logo.png'

const About = () => {
    return (
        <div className='about'>
            <div className='srm-vec'>
                <h1>SRM VEC</h1>
                <div className='about-srm'>
                    <div className='srm-left'>
                        <p>SRM Valliammai Engineering college (An Autonomous Institution) was established on September 9, 1999 and presently conducts 11 Under graduate courses and 8 Post graduate courses.
                         The college has highly qualified, dynamic and dedicated renowned faculty both from academic and industrial background. Besides, the students bring laurels to the college by securing university ranks.</p>
                    </div>
                    <div className='srm-right'>
                        <img src={srm_logo} />
                    </div>
                </div>
            </div>
            <div className='srm-vec'>
                <h1>DEPARTMENT OF CYBER SECURITY</h1>
                <div className='about-srm'>
                    <div className='srm-right'>
                        <img style={{width: "210px"}} src={vall_logo} />
                    </div>
                    <div className='srm-left'>
                        <p>The department of Cyber Security came into existence in the year 2020. The annual intake for the department is 60.
                         In tune with the growing demand profile globally for cyber security professionals the curriculum and the syllabus are rightly upto the core of the day to day necessities and requirements in this field. </p>
                    </div>
                </div>
            </div>
            <div className='srm-vec'>
                <h1>WHITEHATIANS CLUB</h1>
                <div className='about-srm'>
                    <div className='srm-left'>
                        <p>The White Hatians Club is a technical club under the Cyber Security department.  The main goal of this club is to provide a technical opportunity for students to broaden their knowledge in the area of Cyber Security and to interact with other students who have a shared interest in cyber security.
                         Through the club’s activities, members can also network with professionals in the field, gain hands-on experience, and prepare for careers in cyber security. Many events can be conducted to enhance the knowledge of the students in a competitive way.</p>
                    </div>
                    <div className='srm-right'>
                        <img style={{width: "200px"}} src={wh_logo} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
