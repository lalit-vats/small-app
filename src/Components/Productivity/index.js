import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import mobileImg from '../../Assets/imges/feature-new-01.jpg';
import './style.scss';




const Productivity = () => {
    return (
        <Box className="productivity">
            <Container>
                <Box className="productivityTest">
                    <Grid container spacing={5}>
                        <Grid item md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={mobileImg} alt="" />
                        </Grid>
                        <Grid item md={6}>
                            <Box classname="productivityText" sx={{ mt: 5 }}>
                                <Typography variant='h2' sx={{ mb: 3 }}>
                                    Increase your productivity <br />with Small Apps
                                </Typography>
                                <Typography variant="body1" fontSize={22}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>

                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Productivity;




