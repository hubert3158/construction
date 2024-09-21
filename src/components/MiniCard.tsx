import React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";

const MiniCard: React.FC = () => {
    return (
        <div>
            <h3>Residential Services</h3>
            <p>
                At SK & D Group, we offer a full range of residential services to
                transform your home into a sanctuary of comfort and style. Our services
                include:
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
    );
};
export default MiniCard;
