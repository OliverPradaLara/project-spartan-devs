import { useRouter } from "next/router";
import { useRouteDinamic } from "../../../hooks/useRouteDinamic";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Box } from "@mui/material";
import Link from "next/link";



const Character = () => {
    const router = useRouter()
    const {characterId} = router.query
    const {data, isLoading} = useRouteDinamic(characterId)
    
    if (isLoading) {
      return <h1>loading</h1>
      
    }
    console.log("desde id",data)
    return (
     
     <Box sx={{
      with:"100vw",
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
      
     }} >

     <Card sx={{ 
      width: "40%",
      height:"80%"
     }}>
          <CardActionArea sx={{
            height:"60%",
            width:"100%"
          }}>
            <CardMedia sx={{
              bgcolor:"#fff",
              height:"100%",
              objectFit:"contain",
              
            }}
              component="img"
              image={data.imageUrl}
              alt="personaje got"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               { data.fullName}
              </Typography>
              <Box sx={{
                height:"70%"
              }}>
                <Box>{data.id}</Box>
                <Box>{data.title}</Box>
                <Box>{data.family}</Box>
              </Box>
          <CardActions>

            <Button size="small" sx={{
              width:"100%"
            }}  >
            <Link href="/customers">
              Atrás
            </Link>
            </Button>
          </CardActions>
            </CardContent>
          </CardActionArea>
        </Card>
              </Box>
      );
    }

    export default Character






