import { ListItem, Typography } from '@mui/material'
import React from 'react'

const ListElem = ({primary, percentage}) => {
  return (
    <ListItem sx={{display: "flex",pt:'20px', pb:'20px', alignItems:"center"}} className='borderG'  >
        <Typography sx={{mr:'8px'}} color={"#fff"} fontSize={18} fontWeight={900}>{percentage}</Typography>
        <Typography align={'center'} sx={{color: '#fff', fontSize:'15px', textAlign: 'left'}}>{primary}</Typography>
    </ListItem>
  )
}

export default ListElem