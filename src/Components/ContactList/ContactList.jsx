import { Grid } from '@mui/material';
import { textAlign } from '@mui/system';
import React, { useContext, useEffect } from 'react';
import ContactCard from '../ContactCard/ContactCard';
import { contactContext } from '../Context/ContactContext';

const ContactList = () => {
    const {contacts, getContacts} = useContext(contactContext)

    useEffect(() =>{
        getContacts()
    }, [])
    return (
       <div style={{
           margin: '30px',
           }}>
            <Grid  container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            {
                contacts ? (
                    contacts.map((item, index) => (
                        <Grid key={index} style={{margin: '50px'}}>
                            <ContactCard item={item} key={index}/>
                        </Grid>
                    ))
                ) : <h1>Загрузка...</h1>
            }
        </Grid>
       </div>
    );
};

export default ContactList;