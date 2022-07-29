import React from 'react';
import { useParams } from 'react-router-dom';
import contactsInitial from './contactsInitial';
import './ContactsPages.scss'

const ContactsPages = () => {
    const {username} = useParams()
    const contact = contactsInitial.find(user => user.username === username)
    const {firstName, lastName, phone, gender, description} = contact;
    return (
        <div className='container'>
            <h2 className="title">Інформація про контакт:</h2>
            <ul>
                <li>Повне ім'я: {firstName} {lastName}</li>
                <li>Номер телефону: {phone}</li>
                <li>Стать: {gender === 'male' ? 'чоловіча' : gender === 'female' ? 'жіноча' : 'не вказано'}</li>
                <li className={description ? null : 'hidden'}>Опис: {description}</li>
            </ul>
        </div>
    );
};

export default ContactsPages;