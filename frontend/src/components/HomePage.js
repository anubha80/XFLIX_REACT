import React from 'react';
import './HomePage.css';
import Header from './Header';
import GenrePanel from './GenrePanel';
import Dashboard from './Dashboard';
import { Box } from '@mui/system';


const HomePage = () => {
  return (
    <Box className="homepage-container">
        <Header showUploadBtn={true}/>
        <GenrePanel/>
        <Dashboard/>
    </Box>
  )
}

export default HomePage