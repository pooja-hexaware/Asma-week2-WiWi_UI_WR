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
import AddToppings from '../AddToppings';
import TextField from "@mui/material/TextField";
import { useState } from 'react';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  var data=[ 
        {
            "mname": "Loaded Veggie",
            "mdesc" : "Sweet Potatoes, Brown Rice, Pinto Beans, Green Chilli Queso, Chipottle Mayo, Corn Pepper Blend, Topped with Fresh Cilantro and Spanish Tomatoes",
            "mrating" : 4,
            "mImage" : "https://i.pinimg.com/originals/54/56/d9/5456d9f8ddef828fa487910b2b2b52f1.jpg",
            "mprice" : 22.99
        },
        {
            "mname": "Feta Falafel",
            "mdesc" : "Falafel Green Goddess Dressing, Lemon Garlic, Vinaigrette,  , Pickled Red Onion, Tangy Herb Aioli, Feta, Wrapped with Whole Wheat Taco's",
            "mrating" : 5,
            "mImage" : "https://cadryskitchen.com/wp-content/uploads/2022/03/falafel-pita-sandwiches.jpg",
            "mprice" : 12.99
        },
        {
          "mname": "Double Bagel",
          "mdesc" : "Egg, Wheat, Honey Grain, Marble, French Toast, Jalapeño Cheddar, Veggie, Cinnamon Raisin, Salt, Poppy, Chestnut Hill, Sesame, Asiago and Red Onion",
          "mrating" : 5,
          "mImage" : "https://allofoodtruck.fr/wp-content/uploads/2020/05/Depositphotos_88671760_xl-2015-scaled.jpg",
          "mprice" : 11.89
        }
  ]
  const CardHead = styled(Card)(() => ({
    backgroundColor:'#3187d9',
    height: '100%',
    width: '80%',
    padding: '20px 24px',
}))
function Eight() {
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
    </Container>
    </div>
    
  );
}
export default Eight;