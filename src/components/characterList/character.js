import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import React from "react";

export const Character = ({ dataCharacter }) => {
  const { name, email, city, username, website } = dataCharacter;
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {city}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {username}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {email}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {website}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
