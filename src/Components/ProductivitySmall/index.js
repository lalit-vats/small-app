import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import img from '../../Assets/imges/feature-new-02.jpg';

const ProductivitySmallApp = () => {
    return (
        <div className="ProductivitySmallApp">
            <Container>
                
                <Grid item md={6} >
                    <div className="ProductivitySmallApptext" mt={{ mt: 5 }}>
                        <Typography variant="h2" sx={{ mb: 3 }}>
                            Increase your productivity <br />with Small App
                        </Typography >
                        <Typography varient="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>

                    </div>

                </Grid>
                <Grid item md={6}>
                    <img src={img} alt="" />

                </Grid>
            </Container>

        </div>

    )
}


export default ProductivitySmallApp;