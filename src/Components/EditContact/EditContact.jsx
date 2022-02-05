import { Button, Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { contactContext } from '../Context/ContactContext';

const EditContact = () => {
    const params =useParams()
    const {getContactToEdit, contactToEdit, saveEditedContact} = useContext(contactContext)
    const [form, setForm] = useState({
        name: '',
        number: '',
        email: '',
        image: ''
      })
      const navigate = useNavigate()

      useEffect(() => {
          if(contactToEdit){
              setForm(contactToEdit)
          }
      }, [contactToEdit])

      useEffect (() => {
          getContactToEdit(params.id)
      }, [])

      function handleSubmit (e) {
          let editedContact = {
              ...form,
              [e.target.name]: e.target.value
          }
          setForm(editedContact)
      }

      function handleSave () {
          saveEditedContact(form)
          navigate('/')
      }
    return (
        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: '40px auto',
            maxWidth: 1000,
            height: 'auto',
            p: '10px'
          },
      }}
        >
            <Paper elevation={3}>
                <h1 style={{textAlign: 'center', color: 'white', backgroundColor: 'green' }}>Изменить контакт</h1>
                <div style={{display: 'flex', justifyContent: 'space-around', color: 'black'}}>
                    <div>
                        <img width='250px' src={form.image} alt={form.name} />
                    </div>
                    <div style={{
                    width: '450px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                        <form noValidate autoComplete='off'
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    >
                        <TextField 
                        style={{padding: '15px'}}
                        name='name'
                        onChange={handleSubmit}
                        value={form.name}
                        variant='outlined'
                        label='Имя'
                        />
                        <TextField 
                        style={{padding: '15px'}}
                        name='number'
                        onChange={handleSubmit}
                        value={form.number}
                        variant='outlined'
                        label='Номер'
                        />
                        <TextField 
                        style={{padding: '15px'}}
                        name='email'
                        onChange={handleSubmit}
                        value={form.email}
                        variant='outlined'
                        label='Электронная почта'
                        />
                        <TextField 
                        style={{padding: '15px'}}
                        name='image'
                        onChange={handleSubmit}
                        value={form.image}
                        variant='outlined'
                        label='Изменить фото'
                        />
                        <Button onClick={handleSave} variant='outlined' color='success'>Сохранить</Button>
                        </form>
                    </div>
                </div>

            </Paper>
            
        </Box>
    );
};

export default EditContact;