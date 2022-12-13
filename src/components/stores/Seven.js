import React from 'react'
import Card from '@mui/material/Card';
import SearchAppBar from '../SearchAppBar';
import CardMedia from '@mui/material/CardMedia';
import { Stack } from '@mui/system';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import TextField from "@mui/material/TextField";
import AddToppings from '../AddToppings';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  var data=[ 
        {
          "mname": "Double Bagel",
          "mdesc" : "Egg, Wheat, Honey Grain, Marble, French Toast, Jalapeño Cheddar, Veggie, Cinnamon Raisin, Salt, Poppy, Chestnut Hill, Sesame, Asiago and Red Onion",
          "mrating" : 4,
          "mImage" : "https://images.bonnier.cloud/files/ifo/production/20220412084608/K%C3%B8dfri-burger-1.jpg",
          "mprice" : 11.89
        },
        {
            "mname": "Loaded Veggie",
            "mdesc" : "Sweet Potatoes, Brown Rice, Pinto Beans, Green Chilli Queso, Chipottle Mayo, Corn Pepper Blend, Topped with Fresh Cilantro and Spanish Tomatoes",
            "mrating" : 4,
            "mImage" : "https://shwetainthekitchen.com/wp-content/uploads/2020/06/IMG_9615-scaled.jpg",
            "mprice" : 22.99
        },
        {
            "mname": "Feta Falafel",
            "mdesc" : "Falafel Green Goddess Dressing, Lemon Garlic, Vinaigrette,  , Pickled Red Onion, Tangy Herb Aioli, Feta, Wrapped with Whole Wheat Taco's",
            "mrating" : 5,
            "mImage" : "https://www.acouplecooks.com/wp-content/uploads/2020/04/Falafel-Sandwich-008.jpg",
            "mprice" : 12.99   
        },
        {
          "mname": "Hummus Falafel",
          "mdesc" : "Falafel, Spicy Chimichumi, Go-Go Sauce, Roasted Red Pepper Hummus, Red Onions, Feta Pita Chips",
          "mrating" : 4,
          "mImage" : "http://www.howsweeteats.com/wp-content/uploads/2019/03/falafel-I-howsweeteats.com-11.jpg",
          "mprice" : 16.50 
      }
       
  ]
  const CardHead = styled(Card)(() => ({
    backgroundColor:'#3187d9',
    height: '100%',
    width: '80%',
    padding: '20px 24px',
}))
function Seven() {
  const[mquant,setmquant]=useState();
  console.log("mquant",mquant);
    function FormRow() {
        return (
          
          <React.Fragment>
              {data?.map(data=>
            <Grid item xs={4}>
            <Card sx={{ maxWidth: 1200 }}>
            <CardMedia
              component="img"
              height="340"
              image={data.mImage}
            />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.mname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {data.mdesc}
              </Typography>
              <Stack direction="row" spacing={24}>
              <Typography variant="h5" color="error">
              ${data.mprice}
              </Typography>
              <TextField
              sx={{ mb: 1, width: '25%',height: '5%' }}
              autoFocus
              margin="normal"
              fullWidth
              label="Amount"
              type="number"
              max="20"
              min="1"
              defaultValue="1"
              variant="outlined"
              value={mquant}
              onChange={(e) => setmquant(e.target.value)}/>
              </Stack>
              <Rating name="read-only" value={data.mrating} readOnly />
            </CardContent>
            <CardActions>
              <Stack direction="row" spacing={17.5}>
              <Button variant="contained" color="success" size="small">Add to Cart</Button>
              <br></br>
              <AddToppings/>
              </Stack>
            </CardActions>
          </Card>
            </Grid>
            )}
          </React.Fragment>
        );
      }
  return (
    <div>
    <SearchAppBar/>
    <br></br>
    <Container spacing={12}>
    <Box sx={{ width: '100%' }}>
    <CardHead >
    <CardContent >
              <Typography gutterBottom variant="h5" component="div" fontFamily={"sans-serif"} color="white">
                Good Food, Great Time
              </Typography>
              <Typography variant="body1" fontFamily={"sans-serif"} color="whitesmoke">
                Our Chef's at WiWi make delicious food selection every week - you pick, we cook and deliver.
              </Typography>
      </CardContent>
    </CardHead>
    </Box>
    </Container>
    <br></br>
    <Container maxWidth>
    <Stack spacing={4}>
    {/* <Grid container spacing={5} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}> */}
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
      <Grid container spacing={1} rowSpacing={3} columnSpacing={3}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
    </Box>
     </Paper> 
     {/* </Grid> */}
    </Stack>
    <br></br>
    </Container>
    </div>
    
  );
}
export default Seven;