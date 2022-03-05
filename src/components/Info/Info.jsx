import { Box, Container, List, ListItem, ListItemText, Typography} from '@mui/material'
import React from 'react'
import ListElem from './ListElem/ListElem'

const list = [
  {
    percentage: '10%',
    id:1,
    text: 'Design the NFT. Launch a community on Discord and Twitter. Launch the website.'
  },
  {
    percentage: '20%',
    id:2,
    text: 'Launch the website advertising. Build White List.'
  },
  {
    percentage: '30%',
    id:3,
    text: 'We promised to take our programmer to Hawaii'
  },
  {
    percentage: '50%',
    id:4,
    text: 'Get 10,000 followers and start building a White List on Discord. Are we popular yet?'
  },
  {
    percentage: '60%',
    id:5,
    text: "Preparations are complete, let's get into action."
  },
  {
    percentage: '80%',
    id:6,
    text: 'Launch minting among WL members.'
  },
  {
    percentage: '90%',
    id:7,
    text: 'Create a community of NFT buyers'
  },
  {
    percentage: '100%',
    id:8,
    text: 'Testing the metaverse NFT marketplace'
  }
]

const Info = () => {
  return (
    <Container sx={{display: 'flex', mt:'60px', justifyContent: 'center'}} maxWidth={'xl'}>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#2A093D', border: "1px solid rgba(255, 255, 255, 0.24)", boxShadow: '4px 4px 4px rgb(177 177 177 / 20%)' }}>
            <List >
                <ListItem className='borderA'  >
                  <ListItemText>
                  <Typography fontWeight={700} align={'center'} sx={{color: '#fff', textTransform:'uppercase',}}>Activating the Roadmap</Typography>
                  </ListItemText>
                </ListItem>
              {
                list.map(({percentage, text, id})=> <ListElem key={id} percentage={percentage} primary={text}/>)
              }
            </List>
        </Box>
    </Container>
  )
}

export default Info