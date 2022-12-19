import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import "./style.scss";
import mobileImag from '../../Assets/imges/mobile.png'
import { TfiPaintBucket, TfiThought } from "react-icons/tfi";
import { BsSun } from "react-icons/bs";



const lowerHeroData = [
    {
        icon: TfiPaintBucket,
        title: ' Themes Made Easy',
        text: ' Besides its beautiful design. Laapp is an incredibly rich core framework for you to showcase your App.'
    },
    {
        icon: BsSun,
        title: 'Powerful Design',
        text: ' Besides its beautiful design. Laapp is an incredibly rich core framework for you to showcase your App.'
    },
    {
        icon: TfiThought,
        title: 'Creative Content',
        text: ' Besides its beautiful design. Laapp is an incredibly rich core framework for you to showcase your App.'
    },
]


const Hero = () => {
    return (
        <div className="hero">
            <div className="test">
                <Container>
                    <Grid container spacing={5}>
                        <Grid item md={6}>
                            <Box className="heroText">
                                <Typography variant="h2" sx={{ mb: 3 }}>
                                    Showcase your app<br /> with Small Apps
                                </Typography>
                                <Typography variant="body1" fontSize={22} >
                                    Besides its beautiful design. Laapp is an incredibly rich core framework for you to showcase your App.
                                </Typography>
                                <Button variant="contained" >download now</Button>
                            </Box>
                        </Grid>
                        <Grid item md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={mobileImag} alt="" />
                        </Grid>

                    </Grid>
                </Container>
            </div>

            <div className="lowerHero">
                <Grid container spacing={5}>
                    {
                        lowerHeroData.map((d, i) => (
                            <Grid item xs={12} lg={4} key={i}>
                                <div className="wrapper">
                                    <d.icon size={50} color={'#09288E'} />
                                    <Typography variant="h5">
                                        {d.title}
                                    </Typography>
                                    <Typography variant="body1">
                                        {d.text}
                                    </Typography>
                                </div>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </div>
    )
}

export default Hero;