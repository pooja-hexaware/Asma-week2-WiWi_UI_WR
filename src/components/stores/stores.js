import React , {useEffect} from 'react'
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
import CallIcon from '@mui/icons-material/Call';
import axios, { Axios } from 'axios'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  var data=[
    {
      "rname" : "Bistro Kitchen",
        "rImage" : "https://k-graphiste.com/wp-content/uploads/2022/07/logo-restaurant.jpg",
        "rid" : 772,
        "rcity": "Chennai",
        "rrating" : 4,
        "raddress":"#92, Rangananthan Street, M.G.R Road",
        "rzip" : "630021",
        "rstate" : "Tamilnadu",
        "rphone" : "044-36283711",
        "kphone" : "044-36212912"
    },
    { 
      "rname" : "The Permian Restaurant",
      "rImage" : "https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/10/attachment_103367090-e1571110045215.jpg?auto=format&q=60&fit=max&w=930",
      "rid" : 891,
      "rrating" : 4,
      "rcity": "Bangalore",
      "raddress":"#34, Church Street, Brigade Road",
      "rzip" : "560001",
      "rstate" : "Karnataka",
      "rphone" : "080-36283911",
      "kphone" : "080-36284912"

  },
  {
    "rname" : "Burgitos",
      "rImage" : "https://penji.co/wp-content/uploads/2020/10/Dave-BURGITOS.jpg",
      "rid" : 465,
      "rcity": "Ahmedabad",
      "rrating" : 5,
      "raddress":"#29, Gandhi Street Phase - II, Farhman Road",
      "rzip" : "746282",
      "rstate" : "Gujarat",
      "rphone" : "056-36283231",
      "kphone" : "056-36219912"
  },
    {
      "rname" : "Mister Burger",
        "rImage" : "https://i.pinimg.com/originals/df/6d/d0/df6dd05744641d86f38e0689534de878.jpg",
        "rid" : 901,
        "rcity": "Hyderabad",
        "rrating" : 3,
        "raddress":"#34, Dr.Ali Ahmad Street, Jublie Hills Main Road",
        "rzip" : "471813",
        "rstate" : "Telangana",
        "rphone" : "090-36284711",
        "kphone" : "090-362183912"
    }
  ]
  
  const CardHead = styled(Card)(() => ({
    backgroundColor:'#3187d9',
    height: '100%',
    width: '80%',
    padding: '20px 24px',
}))
function Stores() {
  // const getCustomersData = () => {
  //   axios
  //   .get("http://localhost:4000/rest")
  //   .then(data => console.log(data.data,"data"))
  //   .catch(error => console.log(error));
  //   };
    function FormRow() {
      // const data = getCustomersData();
        return (
          <React.Fragment>
              {data?.map(data=>
            <Grid item xs={4}>
            <Card sx={{ maxWidth: 1200 }}>
            <CardMedia
              component="img"
              height="340"
              image={data.rImage}
            />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.rname}
              </Typography>
              <Rating name="read-only" value={data.rrating} readOnly />
              <Typography variant="body2" color="text.secondary">
               {data.raddress}, {data.rcity}, {data.rstate}, {data.rzip}
               </Typography>
               <br></br>
               <Stack direction="row" spacing={16}>
               <Stack direction="row" spacing={2}>
               <CallIcon color="primary"> </CallIcon>
               <Typography gutterBottom variant="body2" component="div">
                {data.rphone}
              </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
               <CallIcon color="warning"> </CallIcon>
               <Typography gutterBottom variant="body2" component="div">
                {data.rphone}
              </Typography>
              </Stack>
              </Stack>
               
            </CardContent>
            <CardActions>
              <Stack direction="row" spacing={20}>
              <Button variant="contained" color="success" size="small" href={"/stores/" + data.rid}>
              Visit Store </Button>
              
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
    <br></br>
    </div>
    
  );
}
export default Stores;