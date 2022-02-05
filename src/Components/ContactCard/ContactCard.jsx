import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { contactContext } from '../Context/ContactContext';
import { Link } from 'react-router-dom';

export default function ContactCard({item}) {
    const {deleteContact} =React.useContext(contactContext)
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="150"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Имя:{item.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
            Номер:{item.number}
        </Typography>
        <Typography variant="body1" color="text.secondary">
            Почта:{item.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => deleteContact(item.id)} style={{margin: '15px'}} size='small' variant='outlined' color='secondary'>Удалить</Button>
        <Link to={`edit/${item.name}/${item.id}`}>
        <Button style={{margin: '15px'}} size='small' variant='outlined' color='warning'>Изменить</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
