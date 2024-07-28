import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './RecentTripStyle.css';

import image9 from '../assets/image/9.jpg';
import image8 from '../assets/image/8.jpg';
import image11 from '../assets/image/11.jpg';

function RecentTrip (){
    return(
        <>
        <h1 style={{textAlign:'center'}}>Recent Trip</h1>
        <p style={{textAlign:'center'}}>You can discover unique destinations using Google Maps.</p>
        <div className='container_Cards'style=
        {{
        display:'flex',flexDirection:'row',justifyContent:'space-evenly'
        }}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia className='t_block'
          component="img"
          height="140"

        image={image9}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Indonezia
          </Typography>
          <Typography variant="body2" color="text.secondary">
          There is a unique fauna and unique flora, a picturesque landscape, 
          clean beaches with fine white sand. The landscape of Indonesia is 
          determined by the volcanic origin of the islands - 
          it is mountainous and hilly. Such features also affect the climate of the islands 
          - it is always cooler in the mountains than on the plains.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

 <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia className='t_block'
          component="img"
          height="140"

        image={image8}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Venice
          </Typography>
          <Typography variant="body2" color="text.secondary">
          They say that whoever has not been to Venice has not seen Italy. 
          This city is called the most elegant in Europe. I was convinced of 
          this too. Because Italian resorts, historic Rome, luxurious parks 
        with fountains
           are one thing. And a city built on water is something unreal!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia className='t_block'
          component="img"
          height="140"
        image={image11}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Africa
          </Typography>
          <Typography variant="body2" color="text.secondary">
          In 2008, Ghana was ranked as the safest country in Africa 
          by the Global Safety Index and has remained at the top of the 
          rankings ever since. The country has rare internal conflicts a
          nd has peaceful relations with its neighbors. 
          Tourists here are treated very friendly
           and they speak English - this is the official language of Ghana.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
    );
}

export default RecentTrip;