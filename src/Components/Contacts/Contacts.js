import React from 'react';
import { Link } from 'react-router-dom';
import ContactList from '../ContactList/ContactList';

const Contacts = () => {
    return (
        <div>
           <h1 style={{
                textAlign: 'center',
                backgroundColor: 'darkgreen',
                color:'white',
                
            }}>Контактная книга</h1>
            <Link to='/add'>
            <button  style={{
            color: 'white',
            backgroundColor: 'green',
            margin: 'auto',
            borderRadius: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'

        }}>Создать новый контакт:</button>
            </Link>
            <ContactList/>
        </div>
    );
};

export default Contacts;