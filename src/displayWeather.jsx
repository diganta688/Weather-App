import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AirIcon from '@mui/icons-material/Air';

export default function displayWeather({weather}){

    const images = {
        initialImg: "https://plus.unsplash.com/premium_photo-1673638836583-7c16d2e34dae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hotImg: "https://imagesvs.oneindia.com/img/2019/02/summer-1550227579.jpg",
        rainImg: "https://cdn.britannica.com/72/123872-050-49243DF7/Monsoon-clouds-Lucknow-India.jpg",
        coldImg: "https://sc0.blr1.cdn.digitaloceanspaces.com/article/151703-exaeyobfnj-1607418524.jpg",
    }

    return(
        <div className="" style={{display: 'flex', justifyContent: 'center', marginTop: '2rem',}}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image= {weather.humidity > 90 ? images.rainImg : weather.temp > 24 ? images.hotImg : weather.temp < 15 ? images.coldImg : images.initialImg}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{weather.city}&nbsp; - &nbsp; "{weather.description}" {weather.humidity > 90 ? <ThunderstormIcon/> : weather.temp > 24 ? <WbSunnyIcon/> : weather.temp < 15 ? <AcUnitSharpIcon/> : <AirIcon/>}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component= "span">
                        <p>Temperature {weather.temp}&deg;C</p>
                        <p>Today's max-temperature {weather.temp_max}&deg;C</p>
                        <p>Today's min-temperature {weather.temp_min}&deg;C</p>
                        <p>{weather.temp}&deg;C feels like {weather.feels_like}&deg;C</p>
                        <p>Humadity is {weather.humidity}</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}