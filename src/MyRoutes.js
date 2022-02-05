import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddContact from './Components/AddContact/AddContact';
import Contacts from './Components/Contacts/Contacts';
import ContactContext from './Components/Context/ContactContext';
import EditContact from './Components/EditContact/EditContact';


const MyRoutes = () => {
    return (
        <div>
            <ContactContext>
                <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Contacts/>} />
                    <Route path='/add' element={<AddContact/>}/>
                    <Route path='/edit/:title/:id' element={<EditContact/>}/>
                </Routes>
                </BrowserRouter>
            </ContactContext>
        </div>
    );
};

export default MyRoutes;