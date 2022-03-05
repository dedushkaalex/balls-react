import { Container, Stack, useMediaQuery, Typography } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';

const menu = ['Home', 'about', 'services', 'resources']

const Footer = () => {
  const matches = useMediaQuery("(max-width:480px)");
  return (
    <Container sx={{mt:'150px'}} maxWidth={'sm'}>
        { matches ? (
            <Stack sx={{justifyContent:"center", alignItems:"center", borderBottom:"0.4px solid rgba(161, 0, 248, 0.78)",borderTop:"0.4px solid #fff", pb:'25px', pt:"7px"}} direction={"column"} spacing={2}>
            {
                menu.map((item, index)=>{
                    return <Typography key={index} sx={{color:"#fff", textAlign:"center", cursor:'pointer'}}  variant='h6' component={'div'}>{item.toUpperCase()}</Typography>
                })
            }
        </Stack>
        ) : (
            <Stack sx={{justifyContent:"center", borderBottom:"0.4px solid rgba(161, 0, 248, 0.78)", pb:'25px'}} direction={"row"} spacing={4}>
            {
                menu.map((item, index)=>{
                    return <Typography href={`#ex${index}`} key={index} sx={{color:"#fff", textDecoration:"none", cursor:'pointer'}}  variant='h6' component={'a'}>{item.toUpperCase()}</Typography>
                })
            }
        </Stack>
        )}
        <Stack direction={'row'} sx={{alignItems:"center", justifyContent:"center", mt:"1rem", pb:"30px"}} spacing={1}>
            <EmailIcon sx={{fill:'#767178 !important'}}/>
            <Typography sx={{textAlign:'center'}} variant='h6' color={'GrayText'} component={'div'}>info@mysticalpyramids.com</Typography>
        </Stack>
    </Container>
  )
}

export default Footer