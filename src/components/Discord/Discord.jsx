import { Container, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const Discord = () => {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <div                 
        style={{
            marginTop:"150px",
            width: '100',
            height: "623px",
            backgroundImage:"url(/promo-react/assets/fon11.png)"}}>
        <Container 
            sx={{
                display: 'flex',
                flexDirection:"column",
                alignItems:'center',
                justifyContent:'center',
                maxHeight:'623px',
                height:'100%'
            }} 
            maxWidth={'md'}>
            <Typography 
                variant="h3" 
                gutterBottom 
                component="div" 
                fontWeight={900} 
                sx={{color:"#fff", textAlign:"center"}}>
                WELCOME TO OUR DISCORD
            </Typography>
            <a href="https://discord.gg/mysticalpyramidsnft">
                <img
                    id="ex2"
                    src="/promo-react/assets/discord_new.gif" 
                    alt="disckord_ico"
                    style={{
                        borderRadius: "50%",
                        maxWidth:"300px",
                        width: "100%"
                }}  />
            </a>
            <a style={{marginTop:"40px", textDecoration:"none"}} href="https://discord.gg/mysticalpyramidsnft">
                    <Typography 
                        variant="h4" 
                        gutterBottom 
                        component="div" 
                        fontWeight={900} 
                        fontSize={matches ? "1.3rem" :  "2rem"}
                        sx={{color:"#fff", textAlign:"center"}}>
                        https://discord.gg/mysticalpyramidsnft
                    </Typography> 
            </a>
        </Container> 
    </div>
  )
}

export default Discord