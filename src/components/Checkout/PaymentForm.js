import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <ListItem style={{ padding: '10px 0' }} >
          <ListItemText primary={'Keyboard'} secondary={`Quantity: 1`}/>
          <Typography variant="body2">ha</Typography>
      </ListItem>
      <ListItem>
        <ListItemText primary='Total'/>
        <Typography variant="h6" >$100</Typography>
      </ListItem>
      <hr />
    </React.Fragment>
  );
}