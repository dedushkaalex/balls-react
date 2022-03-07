import { Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const ListElem = ({primary, title}) => {
  const phones = useMediaQuery("(max-width:716px)");
  const matches = useMediaQuery("(max-width:468px)");
  return (
    <div style={{padding: matches ? '30px 20px 40px 20px' : phones ? "30px 40px 40px 40px" :"30px 20px 40px 20px", maxWidth: phones ? "100%" : "280px", bgcolor: "transparent",border: "1px solid #FFFFFF",}} >
        <Typography fontSize={matches ? "34px" : phones ? "38px" :"30px"} color={"#fff"} sx={{mb:"10px"}} fontFamily={"Montserrat, sans-serif"} fontWeight={900}>{title}</Typography>
        {primary.map((text, id)=>{
          return (
            <Typography fontFamily={'Montserrat, sans-serif'} fontSize={matches ? "20px" : phones ? "24px" : '16px'} key={id + 2} align={'left'} sx={{mt:"20px",maxWidth: phones ? "100%" : "250px",  borderBottom:"1px solid #2e2e2e", pb:"10px", color: '#fff', opacity:' 0.6',}}>{text}</Typography>
          )
        })}

    </div>
  )
}

export default ListElem