// https://www.google.com/url?sa=i&url=https%3A%2F%2Feasy-peasy.ai%2Fai-image-generator%2Fimages%2Fprofessional-portrait-linkedin-profile-caucasian-male-glasses-suit&psig=AOvVaw2XmthvCFZlQeBs_LYxF36J&ust=1724036675954000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDs26jH_YcDFQAAAAAdAAAAABAE
import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Avatar from "@mui/material/Avatar";
import SendIcon from "@mui/icons-material/Send";
import Logo from "../../asset/resources/construction.jpeg";
import KulAcharya from "../../asset/resources/kulAcharya.jpg";
import p17 from "../../asset/resources/p17.jpg";
import p18 from "../../asset/resources/p18.jpg";
import p19 from "../../asset/resources/p19.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Parallax } from "react-parallax";
import Link from "@mui/material/Link";

import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";

import Muicard from "../components/card";
import { Grow } from "@mui/material";
import { FormatBold } from "@mui/icons-material";

const Home: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [hasScrolled, setHasScrolled] = useState(false);

    const scrollDown = () => {
        const targetScrollPosition = window.scrollY + window.innerHeight * 1.01;
        const scrollStep = () => {
            const currentScrollPosition = window.scrollY;
            if (currentScrollPosition < targetScrollPosition) {
                window.scrollTo(0, currentScrollPosition + 30); // Adjust 10 for smoother or faster scroll
                requestAnimationFrame(scrollStep);
            }
        };
        scrollStep();
    };

    const handleScroll = () => {
        if (window.scrollY > 400) {
            // Adjust 50 to your desired scroll threshold
            if (!hasScrolled) {
                // Check if hasScrolled is false before setting it to true
                setIsVisible(false);
                setHasScrolled(true);
            }
        } else {
            if (!hasScrolled) {
                // Check if hasScrolled is false before setting it to true
                setIsVisible(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasScrolled]);

    return (
        <Box sx={{ width: "100%" }}>
            <Parallax
                bgImage={p18}
                strength={500}
                bgImageStyle={{
                    height: "auto",
                    width: "100%",
                    minHeight: "100vh", // Ensure it fills the height
                    objectFit: "cover", // This ensures the image covers the area while maintaining aspect rati
                }}
            >
                <div
                    style={{
                        height: "100vh",
                        width: "auto",
                    }}
                >
                    <Grid
                        item
                        container
                        xs={12}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        sx={{
                            backgroundColor: "white",
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                height: 113,
                                width: 300,
                                // maxHeight: { xs: 233, md: 167 },
                                // maxWidth: { xs: 350, md: 250 },
                            }}
                            alt="The house from the offer."
                            src={Logo}
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        justifyContent={"center"}
                        alignItems={"center"}
                        sx={{
                            marginY: "83vh",
                        }}
                    >
                        {isVisible && (
                            <Box
                                className="blink-1"
                                component={"button"}
                                padding={"2px 25px 2px 25px"}
                                border={"3px solid white"}
                                onClick={scrollDown}
                                sx={{
                                    backgroundColor: "transparent",
                                }}
                            >
                                <ExpandMoreIcon
                                    color="primary"
                                    sx={{
                                        fontSize: "50px",
                                    }}
                                ></ExpandMoreIcon>
                            </Box>
                        )}
                    </Grid>
                </div>
            </Parallax>
            <Grid container sx={{}}>
                <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                    sx={{}}
                    justifyContent={"center"}
                >
                    <Grid
                        item
                        container
                        md={12}
                        flexDirection={"row"}
                        justifyContent={"center"}
                        sx={{ marginTop: 1 }}
                    >
                        <Grid
                            item
                            container
                            md={4}
                            gap={4}
                            sx={{ marginTop: 4, textAlign: "center" }}
                        >
                            <Typography
                                className="landing-text"
                                variant="h4"
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    alignSelf: "center",
                                    fontFamily: '"Dancing Script", cursive',
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "5rem",
                                    }}
                                >
                                    Welcome
                                </span>
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            md={12}
                            gap={4}
                            justifyContent={"center"}
                            sx={{ marginTop: 4, textAlign: "center" }}
                        >
                            <Typography
                                className="landing-text"
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, alignSelf: "center" }}
                            >
                                <span style={{}}>
                                    We bring together expertise across diverse sectors to deliver
                                    comprehensive solutions. Explore our divisions below to see
                                    how we can meet your needs.
                                </span>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        md={12}
                        gap={8}
                        justifyContent={"center"}
                        sx={{ marginTop: 4 }}
                    >
                        <Grow
                            in={hasScrolled || !isVisible}
                            style={{ transformOrigin: "0 0 0" }}
                            timeout={500} // Default to 0 if not visible
                        >
                            <Card sx={{ maxWidth: 500 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h4"
                                            component="div"
                                            fontWeight={"bold"}
                                        >
                                            SK & D Contracting
                                        </Typography>

                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                            fontWeight={"bold"}
                                        >
                                            Residential Services
                                        </Typography>
                                        <Typography gutterBottom component="div" fontSize={"bold"}>
                                            At SK & D Group, we offer a full range of residential
                                            services to transform your home into a sanctuary of
                                            comfort and style. Our services include:
                                        </Typography>

                                        <List marker={"disc"}>
                                            <ListItem>
                                                <span style={{ fontWeight: "bold" }}> Design:</span>{" "}
                                                Tailored design solutions from initial concepts to final
                                                plans.
                                            </ListItem>
                                            <ListItem>
                                                {" "}
                                                <span style={{ fontWeight: "bold" }}>
                                                    Construction & Renovation:
                                                </span>{" "}
                                                Comprehensive management of new builds and home updates.{" "}
                                            </ListItem>
                                            <ListItem>
                                                <span style={{ fontWeight: "bold" }}>
                                                    Installation:
                                                </span>
                                                Expert installation of water supply, electrical,
                                                plumbing, and HVAC systems.
                                            </ListItem>

                                            <ListItem>
                                                <span style={{ fontWeight: "bold" }}>
                                                    Site Visits & Surveys:
                                                </span>
                                                Detailed assessments to provide customized
                                                recommendations
                                            </ListItem>
                                        </List>

                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                            fontWeight={"bold"}
                                        >
                                            Commercial Services
                                        </Typography>
                                        <div>
                                            <Typography
                                                gutterBottom
                                                component="div"
                                                fontSize={"bold"}
                                            >
                                                We specialize in enhancing business environments with
                                                our expert commercial services. Our offerings include:
                                            </Typography>

                                            <List marker={"disc"}>
                                                <ListItem>
                                                    <span style={{ fontWeight: "bold" }}>
                                                        Design & Planning:
                                                    </span>{" "}
                                                    Functional and efficient space design aligned with
                                                    your business goals.
                                                </ListItem>
                                                <ListItem>
                                                    <span style={{ fontWeight: "bold" }}>
                                                        Installation:
                                                    </span>{" "}
                                                    Advanced systems for water supply, electrical,
                                                    plumbing, and HVAC.
                                                </ListItem>
                                                <ListItem>
                                                    <span style={{ fontWeight: "bold" }}>
                                                        Site Visits & Surveys:
                                                    </span>{" "}
                                                    Thorough assessments to tailor our services to your
                                                    commercial needs.
                                                </ListItem>
                                            </List>

                                            <Typography
                                                gutterBottom
                                                variant="h6"
                                                component="div"
                                                fontWeight={"bold"}
                                            >
                                                Public Services
                                            </Typography>
                                            <div>
                                                <Typography
                                                    gutterBottom
                                                    component="div"
                                                    fontSize={"bold"}
                                                >
                                                    SK & D Group is committed to improving public spaces
                                                    with our specialized services:
                                                </Typography>

                                                <List marker={"disc"}>
                                                    <ListItem>
                                                        <span style={{ fontWeight: "bold" }}>
                                                            Site Surveys & Design:
                                                        </span>{" "}
                                                        Practical and visually appealing public space
                                                        designs.
                                                    </ListItem>
                                                    <ListItem>
                                                        <span style={{ fontWeight: "bold" }}>
                                                            Construction & Renovation:
                                                        </span>{" "}
                                                        Effective management of public facility projects.
                                                    </ListItem>
                                                    <ListItem>
                                                        <span style={{ fontWeight: "bold" }}>
                                                            Additional Services:
                                                        </span>{" "}
                                                        Landscaping, highway sweeping, Snow removal, and
                                                        more.
                                                    </ListItem>
                                                </List>
                                            </div>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grow>
                        <Grow
                            in={hasScrolled || !isVisible}
                            style={{ transformOrigin: "0 0 0" }}
                            timeout={500} // Default to 0 if not visible
                        >
                            <Card sx={{ maxWidth: 500 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h4"
                                            component="div"
                                            fontWeight={"bold"}
                                        >
                                            SK & D Services
                                        </Typography>

                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                            fontWeight={"bold"}
                                        ></Typography>
                                        <Typography gutterBottom component="div" fontSize={"bold"}>
                                            Navigating permits and licenses can be complex. We
                                            streamline this process with:
                                        </Typography>

                                        <List marker={"disc"}>
                                            <ListItem>
                                                <span style={{ fontWeight: "bold" }}>
                                                    Permit Acquisition:{" "}
                                                </span>{" "}
                                                Handling the complete application process.
                                            </ListItem>
                                            <ListItem>
                                                {" "}
                                                <span style={{ fontWeight: "bold" }}>
                                                    License Management:
                                                </span>{" "}
                                                Ensuring all licenses are current and valid.
                                            </ListItem>
                                            <ListItem>
                                                <span style={{ fontWeight: "bold" }}>
                                                    Regulatory Compliance:
                                                </span>
                                                Adhering to local building codes and regulations.
                                            </ListItem>

                                            <ListItem>
                                                <span style={{ fontWeight: "bold" }}>
                                                    Document Preparation:
                                                </span>
                                                Organizing and preparing all necessary documentation.
                                            </ListItem>
                                            <ListItem>
                                                <span style={{ fontWeight: "bold" }}>
                                                    Consultation & Guidance:
                                                </span>
                                                Expert advice throughout the regulatory process
                                            </ListItem>
                                        </List>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grow>

                        <Grow
                            in={hasScrolled || !isVisible}
                            style={{ transformOrigin: "0 0 0" }}
                            timeout={500} // Default to 0 if not visible
                        >
                            <Card sx={{ maxWidth: 500 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h4"
                                            component="div"
                                            fontWeight={"bold"}
                                        >
                                            Real Estate Services
                                        </Typography>

                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                            fontWeight={"bold"}
                                        ></Typography>
                                        <Typography gutterBottom component="div" fontSize={"bold"}>
                                            We offer comprehensive real estate services in
                                            collaboration with Kul Acharya of Century 21 New
                                            Millennium:
                                        </Typography>

                                        <List marker={"disc"}>
                                            <ListItem>
                                                <span style={{ fontWeight: "bold" }}>
                                                    Residential Real Estate:
                                                </span>{" "}
                                                Expert advice on buying, selling, or renting homes.
                                            </ListItem>
                                            <ListItem>
                                                {" "}
                                                <span style={{ fontWeight: "bold" }}>
                                                    Commercial Real Estate:
                                                </span>{" "}
                                                Finding and managing commercial properties.
                                            </ListItem>
                                            <ListItem>
                                                <span style={{ fontWeight: "bold" }}>
                                                    Real Estate Investment:
                                                </span>
                                                Strategic guidance for property investments.
                                            </ListItem>

                                            <ListItem>
                                                <span style={{ fontWeight: "bold" }}>
                                                    Market Analysis:
                                                </span>
                                                Detailed evaluations to support informed decisions.
                                            </ListItem>
                                            <ListItem>
                                                <span style={{ fontWeight: "bold" }}>
                                                    Brokerage Services:
                                                </span>
                                                Streamlined buying and selling through Century 21 New
                                                Millennium.
                                            </ListItem>
                                        </List>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grow>
                    </Grid>

                    <Grid
                        item
                        container
                        md={12}
                        flexDirection={"row"}
                        justifyContent={"space-evenly"}
                        alignItems={"center"}
                    >
                        <Grid item container md={6} flexDirection={"column"} gap={3}>
                            <Paper elevation={3} color="red" sx={{ padding: "25px" }}>
                                <Box>
                                    <Avatar
                                        sx={{ height: "80px", width: "80px" }}
                                        alt="Remy Sharp"
                                        src={KulAcharya}
                                    />
                                </Box>
                                <Typography
                                    component={"div"}
                                    sx={{ fontSize: "1rem", marginTop: "5px" }}
                                >
                                    I’m a dedicated realtor with a deep passion for helping
                                    clients find their ideal homes. I pride myself on delivering
                                    personalized service and leveraging my extensive market
                                    knowledge to ensure a smooth and successful real estate
                                    experience. Whether you're buying or selling, I’m committed to
                                    providing the highest level of integrity, attention to detail,
                                    and negotiating the best possible outcomes for you.
                                </Typography>
                                <Typography
                                    component={"div"}
                                    sx={{
                                        fontSize: "1rem",
                                        textAlign: "right",
                                        marginRight: "50px",
                                    }}
                                >
                                    ~ Kul Acharya
                                </Typography>

                                <Typography
                                    component={"div"}
                                    sx={{
                                        fontSize: "1rem",
                                        textAlign: "left",
                                        marginRight: "50px",
                                    }}
                                >
                                    <Link
                                        href="https://www.century21.com/real-estate-agent/profile/kul-acharya-P25394371"
                                        underline="none"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {"Visit here for more info"}
                                    </Link>
                                </Typography>

                                <Box></Box>
                            </Paper>
                        </Grid>
                        <Grid
                            item
                            container
                            md={4}
                            flexDirection={"column"}
                            sx={{
                                marginTop: 4,
                            }}
                            textAlign={"center"}
                            gap={5}
                        >
                            <Paper
                                elevation={3}
                                color="red"
                                // width: "55%",
                                sx={{
                                    minWidth: "320px",
                                    maxWidth: "400px",
                                    padding: "40px 20px 40px 0px",
                                    backgroundColor: "floralwhite",
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        sx={{
                                            flexGrow: 1,
                                            alignSelf: "center",
                                            justifySelf: "center",
                                        }}
                                    >
                                        Find your quote
                                    </Typography>
                                </Box>
                                <Box>
                                    <FormControl>
                                        <TextField
                                            label="Name"
                                            value={""}
                                            onChange={() => { }}
                                            name="numberformat"
                                            id="formatted-numberformat-input"
                                            InputProps={{}}
                                            sx={{ marginTop: "15px" }}
                                            variant="standard"
                                        />

                                        <TextField
                                            label="Email"
                                            value={""}
                                            onChange={() => { }}
                                            name="numberformat"
                                            id="formatted-numberformat-input"
                                            InputProps={{}}
                                            sx={{ marginTop: "15px" }}
                                            variant="standard"
                                        />
                                        <TextField
                                            label="Phone Number"
                                            value={""}
                                            onChange={() => { }}
                                            name="numberformat"
                                            id="formatted-numberformat-input"
                                            InputProps={{}}
                                            sx={{ marginTop: "15px" }}
                                            variant="standard"
                                        />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <Typography
                                        className="landing-text"
                                        component="div"
                                        sx={{
                                            flexGrow: 1,
                                            marginTop: "40px",
                                            // fontamily: '"Dancing Script", cursive',
                                        }}
                                    >
                                        <span
                                            style={
                                                {
                                                    // fontSize: "5rem",
                                                }
                                            }
                                        >
                                            How can we help you ?
                                        </span>
                                    </Typography>
                                </Box>

                                <Box sx={{ marginTop: "30px" }}>
                                    <FormControl>
                                        <textarea rows={4} cols={25}></textarea>
                                    </FormControl>
                                </Box>
                                <Box sx={{ marginTop: "50px" }}>
                                    <Button variant="contained" endIcon={<SendIcon />}>
                                        Submit
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    md={12}
                    justifyContent={"center"}
                    sx={{ marginTop: 4, bgcolor: "black" }}
                    textAlign={"center"}
                >
                    <Grid>
                        <Typography color={"white"}>
                            K & D Group: 1301 York Road, Suite-800, Lutherville, MD 21093
                            &nbsp; &nbsp; Phone: 410.246.2002 &nbsp; &nbsp; Email:
                            info@skdcontracting.com
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
