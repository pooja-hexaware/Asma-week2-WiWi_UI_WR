import React from 'react'
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Draggable from 'react-draggable';
import axios from 'axios';
const AddToppings = () => {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const handleAddToppings = () => {
      handleClose();
      setTimeout(10000);
        alert("Toppings Successfully Added")
    }
    function PaperComponent(props) {
      return (
        <Draggable
          handle="#draggable-dialog-title"
          cancel={'[class*="MuiDialogContent-root"]'}>
          <Paper {...props} />
        </Draggable>
      );
    }
    function AddTopp(toppingsname,toppingsprice)
    {
      console.log("toppingsname",toppingsname);
      console.log("toppingsprice",toppingsprice);
    }
  return (
    <div>
      <Button variant="contained"  color="warning" onClick={handleClickOpen}> + Add Toppings </Button>
      <Dialog width='30%' open={open} onClose={handleClose} PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title">
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">Add Toppings</DialogTitle>
        <DialogContent sx={{ mb: 3, width: '90%' }}>
        <br></br>
        <Box sx={{ width: fullWidth }}>
        <Stack  spacing={2} >
        <Card>
        <Stack direction="row" spacing={14}>
        <CardMedia
        component="img"
        sx={{ width: 160 }}
        image="https://thumbs.dreamstime.com/b/tomato-sauce-glass-bowl-white-background-150052022.jpg"
        alt="Ketchup"
        />
        <Typography variant="h6">
          <br></br> <i> Ketchup </i>
          <Typography variant="subtitle1"> 20 Cal <br></br><b> $0.29 </b></Typography>
        </Typography>
        <Checkbox {...label} defaultChecked={false} color="success" onClick={AddTopp("Ketchup",0.29)}/>
        </Stack>
        <Stack direction="row" spacing={10}>
        <CardMedia
        component="img"
        sx={{ width: 160 }}
        image="https://thumbs.dreamstime.com/b/small-glass-bowl-orange-sweet-sour-sauce-isolated-white-background-bowl-chinese-sauce-orange-sweet-sour-sauce-134243704.jpg"
        alt="Honey Mustard"
        />
        <Typography variant="h6">
          <br></br> <i> Honey Mustard </i>
          <Typography variant="subtitle1"> 30 Cal <br></br><b> $0.39 </b></Typography>
        </Typography>
        <Checkbox {...label} defaultChecked={false} color="success" onClick={AddTopp("Honey Mustard",0.39)}/>
        </Stack>
        <Stack direction="row" spacing={13}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://thumbs.dreamstime.com/b/pesto-sauce-bowl-isolated-white-small-glass-bowl-green-pesto-sauce-isolated-white-background-134060939.jpg"
        alt="Basil Pesto"
        />
        <Typography variant="h6">
          <br></br> <i> Basil Pesto </i>
          <Typography variant="subtitle1"> 40 Cal <br></br><b> $0.99 </b></Typography>
        </Typography>
        <Checkbox {...label} defaultChecked={false} color="success" onClick={AddTopp("Basil Pesto",0.99)}/>
        </Stack>
        <Stack direction="row" spacing={12.5}>
        <CardMedia
        component="img"
        sx={{ width: 170, height:80 }}
        image="https://thumbs.dreamstime.com/b/chili-powder-glass-bowl-9033047.jpg"
        alt="Spice Mix"
        />
        <Typography variant="h6">
          <br></br> <i> Spice Mix </i>
          <Typography variant="subtitle1"> 25 Cal <br></br><b> $0.99 </b></Typography>
        </Typography>
        <Checkbox {...label} defaultChecked={false} color="success" onClick={AddTopp("Spice Mix",0.99)}/>
        </Stack>
        <Stack direction="row" spacing={16}>
         <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://img.freepik.com/premium-photo/caramel-sauce-glass-bowl_88281-2500.jpg"
        alt="Ranch"
        />
        <Typography variant="h6">
          <br></br> <i> Ranch </i>
          <Typography variant="subtitle1"> 130 Cal <br></br><b> $0.39 </b></Typography>
        </Typography>
        <Checkbox {...label} defaultChecked={false} color="success" onClick={AddTopp("Ranch",0.39)}/>
        </Stack>
        <Stack direction="row" spacing={6}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://img.freepik.com/premium-photo/berry-jam-glass-bowl_88281-2488.jpg?w=2000"
        alt="Sun Dried Tomato Pesto Spread"
        />
        <Typography variant="h6">
          <br></br> <i> Sundried Tomato Pesto Spread </i>
          <Typography variant="subtitle1"> 40 Cal <br></br><b> $0.99 </b></Typography>
        </Typography>
        <Checkbox {...label} defaultChecked={false} color="success" onClick={AddTopp("Sundried Tomato Pesto Spread",0.99)}/>
        </Stack>
        <Stack direction="row" spacing={14.5}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://t4.ftcdn.net/jpg/02/23/04/77/360_F_223047710_enFwWh4Hu1qRYNQmVmR7gf6kOdLULY4q.jpg"
        alt="Vinegar"
        />
        <Typography variant="h6">
          <br></br> <i> Vinegar </i>
          <Typography variant="subtitle1"> 80 Cal <br></br><b> $0.29 </b></Typography>
        </Typography>
        <Checkbox {...label} defaultChecked={false} color="success" onClick={AddTopp("Vinegar",0.29)}/>
        </Stack>
        <Stack direction="row" spacing={14}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://media.istockphoto.com/id/120695512/photo/bowl-of-hummus-with-cilantro-and-lemon.jpg?s=612x612&w=0&k=20&c=IaZ_KnUMHxIjrKwAYtNGxzRmeOshWVeF1x4PZtvgK64="
        alt="Hummus"
        />
        <Typography variant="h6">
        <br></br> <i> Hummus </i>
        <Typography variant="subtitle1"> 120 Cal <br></br><b> $1.99 </b></Typography>
        </Typography>
        <Checkbox {...label} defaultChecked={false} color="success" onClick={AddTopp("Hummus",1.99)}/>
        </Stack>
        <Stack direction="row" spacing={12.5}>
        <CardMedia
        component="img"
        sx={{ width: 180, height:'10%'}}
        image="http://hem-easyrelief.com/wp-content/uploads/2014/11/Olive-Oil1.jpg"
        alt="Olive Oil"
        />
        <Typography variant="h6">
          <br></br> <i> Olive Oil </i>
          <Typography variant="subtitle1"> 80 Cal <br></br><b> $0.29 </b></Typography>
        </Typography>
        <Checkbox {...label} defaultChecked={false} color="success" onClick={AddTopp("Olive Oil",0.29)}/>
        </Stack>
        <Stack direction="row" spacing={12.5}>
        <CardMedia
        component="img"
        sx={{ width: 160,  }}
        image="https://thumbs.dreamstime.com/b/israeli-geek-flat-bread-pita-isolated-white-background-164066583.jpg"
        alt="Pita Bread"
        />
        <Typography variant="h6">
          <br></br> <i> Pita Bread </i>
          <Typography variant="subtitle1"> 190 Cal <br></br><b> $1.99 </b></Typography>
        </Typography>
        <Checkbox {...label} defaultChecked={false} color="success" onClick={AddTopp("Pita Bread",1.99)}/>
        </Stack>
        </Card>
        </Stack>
        </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="warning" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="warning" onClick={handleAddToppings}>Add Toppings</Button>
        </DialogActions>
      </Dialog> 
    </div>
  )
}

export default AddToppings
