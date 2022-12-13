import React from 'react'
import SearchAppBar from './SearchAppBar';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button";
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import TextField from "@mui/material/TextField";
import { useState } from 'react';
import { styled } from '@mui/system';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SubmitOrder from './SubmitOrder'
import { AtmTwoTone, DeleteOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
const Container = styled('div')(({ theme }) => ({
  margin: '20px',
  color:'blue',
  [theme.breakpoints.down('sm')]: {
      margin: '16px',
  },
  '& .breadcrumb': {
      marginBottom: '30px',
      [theme.breakpoints.down('sm')]: {
          marginBottom: '16px',
      },
  },
}))
const Cart = () => {
  const[coupon,setcoupon]=useState("")
  const [errorMessage, seterrorMessage]= useState("")
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const handleCoupOpen = () => {
    setOpen(true);
  };

  const handleCoupClose = () => {
    setOpen(false);
  };
  const couponcheck = () => {
    setcoupon(coupon);
    console.log("coupon",coupon);
    var coupval=0;
    var today_date = new Date();

// Using toLocaleString(Ecmascript)
// Full month name
const full_month_name = today_date.toLocaleString('default', { month: 'long' });
console.log(full_month_name);
    const strings = ['JUMBO', 'DECEOK'];
    const strchk = coupon.slice(0, 3);
  if(coupon.length <=6)
  {
     if (strings.includes(coupon) === true)
     {
       if (coupon === 'JUMBO')
       {
                coupval = 4.23
              seterrorMessage("$4.23 Discount is Applied Successfully !!!")
       }
        else if(coupon === 'DECEOK' && full_month_name === 'December')
        {
                coupval = 2.33  
                seterrorMessage("$2.23 Discount is Applied Successfully !!!")   
        }
     }
     else if(strchk === 'ACT')
     {
     coupval =2.12
     seterrorMessage("$2.12 Discount is Applied Successfully !!!");
     }
     else
     seterrorMessage("Invalid Coupon");
  }
  else
  {
    seterrorMessage("Invalid Coupon");
  }
     console.log("strings",strings);
     console.log("coupval",coupval);
     console.log("coupon",coupon);
     console.log("strchk",strchk);
  }
  var data=[ 
    {
        "mname": "Loaded Veggie",
        "mdesc" : " Sweet Potatoes, Brown Rice, Pinto Beans, Green Chilli Queso, Chipottle Mayo, Corn Pepper Blend",
        "mrating" : 4,
        "mprice": 22.99,
        "mquant" : 2,
        "combo": true,
        "mImage" : "https://i.pinimg.com/originals/54/56/d9/5456d9f8ddef828fa487910b2b2b52f1.jpg" 
    },
    {
        "mname": "Hummus Falafel",
        "mdesc" : "Falafel, Spicy Chimichumi, Go-Go Sauce, Roasted Red Pepper Hummus, Red Onions, Feta Pita Chips",
        "mrating" : 4,
        "mprice" : 16.50,
        "mquant":  1,
        "combo" : false,
        "mImage" : "https://thumbs.dreamstime.com/b/chickpea-hummus-falafel-plate-healthy-arabic-vegetarian-appetizer-food-closeup-view-146351654.jpg" 
    }
  ]
  function Amount()
    {
      var st= data.mquant * data.mprice;
      if(data.mquant>1 && data.combo===true && data.mname==="Loaded Veggie")
      {
        const discval= (data.mquant/2)*0.15
        var total=st-discval
        return total;
        console.log("total",total)
      }
      return total;
    }
  function FormRow() {
    
    return (
      
      <React.Fragment>
          {data?.map(data=>
        <Grid item xs={8}>
        <Card sx={{ maxWidth: 1000 }}>
        <Stack direction="row" spacing={12}>
        <CardMedia
          sx={{maxWidth:150}}
          component="img"
          height="150"
          image={data.mImage}/>
        <CardContent>
          <br></br>
          <br></br>
          <Stack direction="row" spacing={12}>
          <Typography gutterBottom variant="subtitle" component="div"> <b> {data.mname} </b> </Typography>
          <Typography  variant='subtitle'><body className="css-amt">{data.mquant}</body></Typography>
          <b>X</b>
          <Typography  variant='subtitle'><body className="css-amt">{data.mprice}</body></Typography>
          <b font-size="18">=</b>
          <Typography variant="subtitle"><body >{(data.mprice)*(data.mquant)}</body></Typography>
          {/* <Typography variant ='subtitle'><body className='css-total'>{Amount()}</body></Typography> */}
          <IconButton><DeleteOutline color='error' /></IconButton>
          </Stack>
        </CardContent>
        </Stack>
      </Card>
        </Grid>
        )}
      </React.Fragment>
    );
  }
  return ( 
    <div>
        <SearchAppBar/>
      <Container>
        <br></br>
        <Paper elevation={3} sx={{width:setFullWidth}}>
        <Stack direction="row" spacing={14}>
        <Paper elevation={3} sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 1800,
            flexGrow: 1,
            backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }} > 
            <Box sx={{ width: '100%' }}>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} rowSpacing={3} >
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
    </Box>
     </Paper> 
        </Stack>
        </Paper>
        <br></br>
      <Button variant="outlined" color="success" onClick={handleCoupOpen}> Add Coupon </Button>
      <Dialog fullWidth={fullWidth}
        maxWidth={maxWidth} open={open} onClose={handleCoupClose}>
        <DialogTitle>Add Field</DialogTitle>
        <DialogContent sx={{ mb: 3, width: '80%' }}>
        <TextField
          sx={{ mb: 3, width: '90%' }}
            autoFocus
             margin="normal"
             fullWidth
            label="Coupon Code"
            type="string"
            variant="outlined"
            value={coupon}
            onChange={(e) => setcoupon(e.target.value)}
            helperText={errorMessage}
            color="success"
          />
        </DialogContent>
        <DialogActions>
          <Button  variant="outlined" color="success" onClick={handleCoupClose}>Cancel</Button>
          <Button  variant="outlined" color="success" onClick={couponcheck}>Validate Coupon</Button>
        </DialogActions>
      </Dialog> 
      <br></br>
      <br></br>
      <SubmitOrder/>
      </Container>
    </div>
  )
}

export default Cart

