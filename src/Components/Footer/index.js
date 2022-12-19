import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import logo from "../../Assets/Logo/logo.png";
import './style.scss';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';


const NAV_LINKS = [
    {
        header: "PRODUCT",
        items: [
            {
                lable: "Teams",
                link: "/teams"
            },
            {
                lable: "Blogs",
                link: "/teams"
            },
            {
                lable: "FAQS",
                link: "/teams"
            },
        ]
    },
    {
        header: "RESOURCES",
        items: [
            {
                lable: "Signup",
                link: "/teams"
            },
            {
                lable: "Login",
                link: "/teams"
            },
            {
                lable: "Blogs",
                link: "/teams"
            },
        ]
    },
    {
        header: "COMPANY",
        items: [
            {
                lable: "Carrier",
                link: "/teams"
            },
            {
                lable: "Contact",
                link: "/teams"
            },
            {
                lable: "Investor",
                link: "/teams"
            },
            {
                lable: "Terms",
                link: "/teams"
            },
        ]
    },
    {
        header: "COMPANY",
        items: [
            {
                lable: "About",
                link: "/teams"
            },
            {
                lable: "Contact",
                link: "/teams"
            },
            {
                lable: "Team",
                link: "/teams"
            },
            {
                lable: "Privacy Policy",
                link: "/teams"
            },
        ]
    },
]

const Footer = () => {

    const socialIcons = [<FaFacebookF />, <AiOutlineInstagram />, <FaTwitter />]
    return (
        <div className="footerWrapper">
            <div className="footer">
                <Container>
                    <Grid container>
                        <Grid item md={4}>
                            <img src={logo} alt="" />
                            <div className="socialIconWrapper" >
                                {
                                    socialIcons.map((d, i) => (
                                        <div className="socialIcons" key={i}>
                                            {d}
                                        </div>
                                    ))
                                }
                            </div>

                        </Grid>
                        <Grid item md={8} style={{ display: "flex", justifyContent: "space-between" }}>
                            {
                                NAV_LINKS.map((object, i) => (
                                    <div key={i} className="productPart">
                                        <h3>{object.header}</h3>
                                        <div className="services">
                                            {object.items.map((item, i) => (
                                                <a style={{ color: "#fff" }} href={item.link} key={i}>{item.lable}</a>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            }

                        </Grid>
                    </Grid>

                </Container>
            </div>

            <div className="bottomFooter">
                <p>Copyright © 2022. Designed & Developed by Themefisher</p>
                <p style={{paddingTop:'20px'}}>Distributed By Themewagon</p>
            </div>
        </div>
    )
}

export default Footer;

