import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import UploadIcon from '@mui/icons-material/Upload';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import Popup from './Popup';



const Header = ({showUploadBtn}) => {

  const [open, setOpen] = useState(false);
  const [searchVideo, setSearchVideo] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearchVideo = (e) =>{
    setSearchVideo(e.target.value);
  }

  return (
    <Box className="header-container">
      <Box className="header">
      <Link to="/">
        <img className='header-logo' src={require("../assets/Logo.png")} alt="xflix-logo" />
      </Link>
      
      <Box>
        <TextField 
        className='header-searchbox'
        sx={{ input: { color: 'white', padding:1 } }}
        onChange={handleSearchVideo}
        value={searchVideo}
        InputProps={{disableUnderline: true}}
        variant="standard" />
        <SearchIcon className='header-search-btn'/>
      </Box>
      <Box>

          {/* 
            NOTE FOR SELF 
            Special case where the ternary operator can be simplified!!
            When you want to render either something or nothing, 
            you can only use the && operator.
            && doesn’t evaluate the right-hand expression if only 
            the left-hand expression can decide the final result
          */}

          {showUploadBtn && <Button className='header-upload-btn' variant="contained"
              onClick={handleClickOpen}> 
            <UploadIcon/> 
            Upload
          </Button>}
        
          <Popup
          open={open}
          onClose={handleClose}/>
        </Box>
      </Box>
    </Box>
  )
};

export default Header;