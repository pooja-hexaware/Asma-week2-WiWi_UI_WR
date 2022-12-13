import React,{useState} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from 'axios';
const SubmitOrder = () => {
  const[name,setname]=useState("")
  const[Phone,setphone]=useState("")
  const[Address,setaddress]=useState("")
  const[postalcode,setpostalcode]=useState("")
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const placeorder = () => {
        console.log("orderplace function called !!!!!!")
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}> Submit Order </Button>
      <Dialog fullWidth={fullWidth}
        maxWidth={maxWidth} open={open} onClose={handleClose}>
        <DialogTitle>Submit Order</DialogTitle>
        <DialogContent sx={{ width: maxWidth }}>
          <TextField
          sx={{ mb: 3, width: '90%' }}
            autoFocus
            required
            id="outlined-required"
            margin="normal"
            fullWidth
            label="Name"
            type="string"
            variant="outlined"
            value={name}
            onChange={(e) => setname(e.target.value)}
            helperText ={name===null ? "Name Cannot be Empty": ""}
          />
          <TextField
          sx={{ mb: 3, width: '90%' }}
            autoFocus
            required
            id="outlined-required"
            margin="normal"
            fullWidth
            label="Phone Number"
            type="string"
            variant="outlined"
            value={Phone}
            onChange={(e) => setphone(e.target.value)}
            helperText ={Phone===null ? "Phone Number  Cannot be Null": ""}
          />
          <TextField
          sx={{ mb: 3, width: '90%' }}
          required
          id="outlined-required"
            autoFocus
            margin="normal"
            fullWidth
            label="Postal Code"
            type="string"
            variant="outlined"
            value={postalcode}
            onChange={(e) => setpostalcode(e.target.value)}
            helperText ={postalcode===null ? "Postal Code  Cannot be Null": ""}
          />
          <TextField
          sx={{ mb: 3, width: '90%' }}
            autoFocus
            required
            id="outlined-required"
            margin="normal"
            fullWidth
            label="Address"
            type="string"
            variant="outlined"
            value={Address}
            onChange={(e) => setaddress(e.target.value)}
            helperText ={Address===null ? "Address  Cannot be Null": ""}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          <Button variant="outlined" onClick={placeorder}>Submit Order</Button>
        </DialogActions>
      </Dialog> 
          
    </div>
  )
}

export default SubmitOrder
