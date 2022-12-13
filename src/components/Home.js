import React from 'react'
import SearchAppBar from './SearchAppBar';
import { Container } from '@mui/system'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
function Home() {
  return (
    <div>
    <SearchAppBar/>
    <br></br>
    <Paper >
    <Container spacing={12}>
    <Box sx={{ width: '100%' }}>
    </Box>
    </Container>
    </Paper>
    </div>
  );
}
export default Home;