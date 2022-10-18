import { useRouter } from "next/router";
import { useRouteDinamic } from "../../hooks/useRouteDinamic";
import gotCharacterDetails from "../../components/customer/got-character-details";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



export const character = () => {
    const router = useRouter()
    const {characterId} = router
    const {data} = useRouteDinamic(characterId)
    const {id,firstName,lastName,fullName,title,family,image,imageUrl} = data
    
      return (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={imageUrl}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      );
    }







