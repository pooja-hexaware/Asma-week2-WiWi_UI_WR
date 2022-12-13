import React from 'react'
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
import '../App.css';
import L, { icon } from "leaflet";
import SearchAppBar from './SearchAppBar';
import { Container } from '@mui/system';
import "leaflet/dist/leaflet.css";
export default function Maps()
{
  function GetIcon() {
    return L.icon({
      iconUrl: require("../Static/Icons/pin.png"),
      iconSize: 40,
    });
  }
return (
    <div>
    <SearchAppBar/>
    <br></br>
    <Container sx={{width:'85%'}}>
    <MapContainer center={[13.067439,  80.232617]}  zoom={13} style={{height:'640px', width:'100%'}} >
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />
 <Marker position={[13.067439,  80.232617]} icon={GetIcon()} >
      <Popup>
        <b>Bistro Kitchen </b>
        <img src="https://k-graphiste.com/wp-content/uploads/2022/07/logo-restaurant.jpg" width='90%' height='90%' />
        <br></br>
        <p> Restaurant Contact : 044-36283711 </p>
        <p>#92, Rangananthan Street, M.G.R Road, Chennai, Tamilnadu - 630021 </p>
        <a class="btn btn-primary" href="/stores/772" role="button">Visit Restaurant</a>
      </Popup>
  </Marker>
  <Marker position={[23.033863,  72.585022]} icon={GetIcon()}>
      <Popup>
        <b>Burgitos </b>
        <img src="https://penji.co/wp-content/uploads/2020/10/Dave-BURGITOS.jpg" width='90%' height='90%' />
        <br></br>
        <p> Restaurant Contact : 056-36283231 </p>
        <p>#29, Gandhi Street Phase - II, Farhman Road, Ahmedabad, Gujarat - 746282 </p>
        <a class="btn btn-primary" href="/stores/465" role="button">Visit Restaurant</a>
      </Popup>
  </Marker>
  <Marker position={[17.426112, 78.415156]} icon={GetIcon()}>
      <Popup>
        <b>Mister Burger </b>
        <img src="https://i.pinimg.com/originals/df/6d/d0/df6dd05744641d86f38e0689534de878.jpg" width='90%' height='90%' />
        <br></br>
        <p> Restaurant Contact : 090-36284711 </p>
        <p>#34, Dr.Ali Ahmad Street, Jublie Hills Main Road, Hyderabad, Telangana - 471813 </p>
        <a class="btn btn-primary" href="/stores/901" role="button">Visit Restaurant</a>
      </Popup>
  </Marker>
  <Marker position={[12.972442,  77.580643]} icon={GetIcon()}>
      <Popup>
        <b>The Permian Restaurant </b>
        <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/10/attachment_103367090-e1571110045215.jpg?auto=format&q=60&fit=max&w=930" width='70%' height='70%' />
        <br></br>
        <p> Restaurant Contact : 080-36283911 </p>
        <p>#34, Church Street, Brigade Road, Bangalore, Karnataka - 560001 </p>
        <a class="btn btn-primary" href="/stores/891" role="button">Visit Restaurant</a>
      </Popup>
  </Marker>
</MapContainer>
</Container>
</div>
)
}