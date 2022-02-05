import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router';
import { contactContext } from '../Context/ContactContext';


export default function AddContact() {
    const [form, setForm] = React.useState({
      name: '',
      number: '',
      email: '',
      image: ''
    })

    const navigate = useNavigate()

    const {addContact} = React.useContext(contactContext) 
    const handleChange = (e) => {
      const values = {
        ...form,
        [e.target.name]: e.target.value 
      }
      setForm(values)
    }
      const handleSubmit = (e) => {
        e.preventDefault()
        if(!form.name || !form.number || !form.email || !form.image) {
          alert('Заполните поля!')
          return
        }
        addContact(form)
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
            <h1 style={{textAlign: 'center', color: 'white', backgroundColor: 'green' }}>Добавить контакт</h1>
            <div style={{display: 'flex', justifyContent: 'space-around', color: 'black'}}>
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
                    onChange={handleChange}
                    value={form.name}
                    variant='outlined'
                    label='Имя'
                    />
                    <TextField 
                    style={{padding: '15px'}}
                    name='number'
                    onChange={handleChange}
                    value={form.number}
                    variant='outlined'
                    label='Номер'
                    />
                    <TextField 
                    style={{padding: '15px'}}
                    name='email'
                    onChange={handleChange}
                    value={form.email}
                    variant='outlined'
                    label='Электронная почта'
                    />
                    <TextField 
                    style={{padding: '15px'}}
                    name='image'
                    onChange={handleChange}
                    value={form.image}
                    variant='outlined'
                    label='Изменить фото'
                    />
                    <Button onClick={handleSubmit} variant='outlined' color='success'>Добавить +</Button>
                    </form>
                </div>
            </div>

        </Paper>
        
    </Box>
 
  );
}
