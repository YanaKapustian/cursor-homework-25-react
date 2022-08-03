import React from 'react';
import malePic from './img/mars.png';
import femalePic from './img/female.png';
import { NavLink } from "react-router-dom";


const Contact = ({props}) => {
    const {firstName, lastName, username, phone, gender} = props;
    return (
        <div className='contact-item'>
            <div className='info'><NavLink className="link-contacts" to={`/contacts/${username}`}>{firstName} {lastName} {gender === 'female' ? <img src={femalePic} alt="female" className='female' /> : gender === 'male' ? <img src={malePic} alt="male" className='male' /> : null }</NavLink></div>
            <div className='phone'>{phone}</div>
        </div>
    )
};

export default Contact;