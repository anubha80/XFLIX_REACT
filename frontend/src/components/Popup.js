import React, { useState } from 'react'
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, InputLabel } from '@mui/material';
import "./Popup.css"



const Popup = (props) => {
    const { onClose, open } = props;

    const [videoLink,setVideoLink] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");

// The padStart() method pads the current string with another 
// string (multiple times, if needed) until the resulting string 
// reaches the given length. The padding is applied from the start 
// of the current string.

    let currentDate = new Date();
    currentDate = String(currentDate.getDate()).padStart(2,0)+"/"+String(currentDate.getMonth()+1)+"/"+String(currentDate.getFullYear());
    console.log(currentDate);

    const clearField = () =>{
      setVideoLink("");
      setImageLink("");
      setTitle("");
      setGenre("");
      setRating("");
    }

    const handleUpload = () =>{
      onClose();
      console.log("data uploaded successfully... end of request");
      clearField();
    }
  
    const handleClose = () => {
      onClose();
      clearField();
    };
    
  
    return (
      <Dialog onClose={handleClose} open={open} >
        <DialogTitle className='popup-title'>Upload Video</DialogTitle>
        <DialogContent className='popup-content' sx={{padding:1, width:400}}>
        
                <TextField className='popup-textfield'
                  label="Video Link..."
                  InputLabelProps={{ shrink: true }}
                  defaultValue={videoLink}
                  helperText="This link will be used to derive the video"
                  onChange={(e)=>{setVideoLink(e.target.value)}}
                />
                <TextField className='popup-textfield'
                  label="Image Link.."
                  InputLabelProps={{ shrink: true }}
                  defaultValue={imageLink}
                  helperText="This link will be used to preview the thumbnail image"
                  onChange={(e)=>{setImageLink(e.target.value)}}
                />
                <TextField className='popup-textfield'
                  label="Title"
                  InputLabelProps={{ shrink: true }}
                  defaultValue={title}
                  helperText="The title will be the representative text for video"
                  onChange={(e)=>{setTitle(e.target.value)}}
                />
                <TextField className='popup-textfield'
                  label="Genre"
                  InputLabelProps={{ shrink: true }}
                  defaultValue={genre}
                  helperText="Genre will help in categorizing your videos"
                  onChange={(e)=>{setGenre(e.target.value)}}
                />
                <TextField className='popup-textfield'
                  label="Suitable age group for the clip"
                  InputLabelProps={{ shrink: true }}
                  defaultValue={rating}
                  helperText="This will be used to filter videos on age group suitability"
                  onChange={(e)=>{setRating(e.target.value)}}
                />
                <TextField className='popup-textfield'
                  label="Upload and Publish Date"
                  InputLabelProps={{ shrink: true}}
                  inputProps={{ readOnly: true}}
                  defaultValue={currentDate}
                  helperText="This will be used to sort videos"
                />
            <DialogActions className='popup-btn-container'>
              <Button className='popup-upload-btn' onClick={handleUpload}>Upload</Button>
              <Button className='popup-cancel-btn' onClick={handleClose}>Cancel</Button>
            </DialogActions>
          
        </DialogContent>
        
      </Dialog>
    );
}

export default Popup