import { Box,Button } from '@mui/material';
import { useState } from 'react';
import React from 'react';
import './GenrePanel.css';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const GenrePanel = () => {
  const [genres, setGenres] = useState(["all-genre"]);
  const [rating, setRating] = useState("All")
  const [filter, setFilter] = useState("1");


  /* */
  /* NOTES FOR SELF : */
  /* */
  // When using React, you should never mutate the state directly. Array.splice() mutates the Array and that is why the 
  // re rendering was not happening correctly 

  const handleGenreSelection = (e) =>{
    if(e.target.id==="all-genre"){
      setGenres([e.target.id]);
    }
    else if (genres.includes(e.target.id)){
      setGenres(genres.filter(function(g){
        return g !== e.target.id;
      }));
    }
    else{
      setGenres([...genres.filter(function(g){
        return g !== "all-genre";
      }), e.target.id]);
    }
  }

  const handleRatingSelection = (e) =>{
    setRating(e.target.id);
  }

  const handleFilterSelect = (event) =>{
    console.log("heh");
    console.log(event.target.value);
    setFilter(event.target.value);
  }

  return (
    <Box className="genre-conatiner">
    <Box className='genre'>
      <Box className='genre-panel first'>
        <Button id="all-genre" className={genres.includes('all-genre') ? 'genre-panel-btn-filled' : 'genre-panel-btn'} onClick={handleGenreSelection}>All</Button>
        <Button id="Education" className={genres.includes('Education') ? 'genre-panel-btn-filled' : 'genre-panel-btn'} onClick={handleGenreSelection}>Education</Button>
        <Button id="Sports" className={genres.includes('Sports') ? 'genre-panel-btn-filled' : 'genre-panel-btn'} onClick={handleGenreSelection}>Sports</Button>
        <Button id="Comedy" className={genres.includes('Comedy') ? 'genre-panel-btn-filled' : 'genre-panel-btn'} onClick={handleGenreSelection}>Comedy</Button>
        <Button id="Lifestyle" className={genres.includes('Lifestyle') ? 'genre-panel-btn-filled' : 'genre-panel-btn'} onClick={handleGenreSelection}>Lifestyle</Button>
        {/* <Button id="Release Date" className='genre-panel-btn'><ImportExportIcon/>Release Date</Button> */}
        <Select 
          className='genre-panel-btn'
          value={filter}
          variant="standard"
          disableUnderline
          // IconComponent={null}
          onChange={handleFilterSelect}
          sx={{padding:1,fontSize: 14, "&:hover": {backgroundColor:"whitesmoke !important"}}}
          MenuProps={{
            sx: {
              "&& .Mui-selected": {
                backgroundColor: "black !important",
                color:"whitesmoke"
              },
              '& .MuiMenuItem-root': {
              padding: 1,
              backgroundColor: "#303438 !important",
              color:"whitesmoke",
            },
            }
          }}
        >
        
          <MenuItem  value={1}>Release Date {/*<ImportExportIcon sx={{transform: 'scale(0.8)'}}/>*/}</MenuItem>
          <MenuItem  value={2}>View Count</MenuItem>
        </Select>
      </Box>
      <Box className='genre-panel second'>
        <Button id="All" className={rating==="All" ? 'genre-panel-btn-filled' : 'genre-panel-btn'} onClick={handleRatingSelection}>Any age group</Button>
        <Button id="7" className={rating==="7" ? 'genre-panel-btn-filled' : 'genre-panel-btn'} onClick={handleRatingSelection}>7 +</Button>
        <Button id="12" className={rating==="12" ? 'genre-panel-btn-filled' : 'genre-panel-btn'} onClick={handleRatingSelection}>12 +</Button>
        <Button id="16" className={rating==="16" ? 'genre-panel-btn-filled' : 'genre-panel-btn'} onClick={handleRatingSelection}>16 +</Button>
        <Button id="18" className={rating==="18" ? 'genre-panel-btn-filled' : 'genre-panel-btn'} onClick={handleRatingSelection}>18 +</Button>
      </Box>
    </Box>
    </Box>
  );
};

export default GenrePanel;