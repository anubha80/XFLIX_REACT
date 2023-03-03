import React, { useState } from 'react'
import './VideoPage.css'
import { Box } from '@mui/system'
import { useParams } from "react-router-dom";
import Header from './Header';
import axios from 'axios';
import { useEffect } from 'react';
import Dashboard from './Dashboard';
import { Button, Grid } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';



const VideoPage = () => {
  
  const [videoDetails, setVideoDetails] = useState([]);
  const [videoId, setVideoId]=useState("");

  let params = useParams();
  console.log(params);
  // setVideoId(params.id);


  useEffect(() => {
    setVideoId(params.id);
    getVideoDetails(params.id);
  }, [videoId,params.id]);

  

  const getVideoDetails = async (id) =>{
    console.log("====", id);
    console.log('https://01dc1d98-9d8d-4448-b58e-62bb5b9cfb66.mock.pstmn.io/v1/videos/:'+id);
    await axios.get('https://01dc1d98-9d8d-4448-b58e-62bb5b9cfb66.mock.pstmn.io/v1/videos/:'+id)
    .then((response)=>{
      console.log(response.data);
      setVideoDetails(response.data);
    })
  }

  return (
    <Box className="video-page-container">
    <Header showUploadBtn={false}/>
      <Box className="video-page">
        <Box className="video-frame">
            <iframe src={'https://www.'+videoDetails.videoLink}
              allow='autoplay; encrypted-media'
              
              allowFullScreen
              title='video'
            />
        </Box>
        <Grid container direction="row"
              justifyContent="space-between"
              alignItems="center" 
              spacing={2}
              sx={{marginTop:-3}}
              >
          <Grid item>
            <p className='video-title'>{videoDetails.title}</p>
            <Grid sx={{marginTop:-2, fontSize:14}} container direction="row" justifyContent="flex-start">
              <p className='video-content-rating'>{videoDetails.contentRating}</p>
              <span id='dot'></span>
              <p className='video-release-date'>{videoDetails.releaseDate}</p>
            </Grid>
          </Grid>
          <Grid item>
            <Button className='video-page-like-dislike-btn'><ThumbUpIcon sx={{paddingRight:1, color:"#a09d9d"}}/>123</Button>
            <Button className='video-page-like-dislike-btn'><ThumbDownIcon sx={{paddingRight:1, color:"#a09d9d"}}/>12</Button>
          </Grid>
        </Grid>
        <hr />
      </Box>
      <Dashboard/>
    </Box>
  )
}

export default VideoPage