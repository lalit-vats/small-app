import { Container } from '@mui/system';
import './style.scss';
import logo from '../../Assets/Logo/logo.png';
import { Grid } from '@mui/material';

const Header = () => {
    const headerIteams = ['HOME', 'PAGES', 'ABOUT', 'CONTACT'];

    return (
        <div className='header'>
            <Container>
                <Grid container>
                    <Grid item md={4}>
                        <img src={logo} alt="" />
                    </Grid>
                    <Grid item md={8} sx={{ display: 'flex', alignItems: 'center' }} >
                        <div className='headerRight'>
                            {
                                headerIteams.map((d, i) => (
                                    <a href="#" key={i} >
                                        {d}
                                    </a>

                                ))
                            }
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Header;

