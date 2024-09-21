import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grow } from "@mui/material";
import MiniCard from "./MiniCard";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";

export default function muiCard(props: any) {
    const [hover, setHover] = React.useState(false);

    return (
        <Grow
            in={props.hasScrolled || !props.isVisible}
            style={{ transformOrigin: "0 0 0" }}
            timeout={props.timeout} // Default to 0 if not visible
        >
            <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <div>
                            <h3>Residential Services</h3>
                            <p>
                                At SK & D Group, we offer a full range of residential services
                                to transform your home into a sanctuary of comfort and style.
                                Our services include:
                            </p>

                            <List marker={"disc"}>
                                <ListItem>The Shawshank Redemption</ListItem>
                                <ListItem nested>
                                    <ListItem>Star Wars</ListItem>
                                    <List marker="circle">
                                        <ListItem>Episode I – The Phantom Menace</ListItem>
                                        <ListItem>Episode II – Attack of the Clones</ListItem>
                                        <ListItem>Episode III – Revenge of the Sith</ListItem>
                                    </List>
                                </ListItem>
                                <ListItem>The Lord of the Rings: The Two Towers</ListItem>
                            </List>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grow>
    );
}
