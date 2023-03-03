import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system';
import './Dashboard.css';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography, Grid } from '@mui/material';
import axios from "axios";
import { SentimentDissatisfied } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom' ;
import Button from '@mui/material/Button';


const Dashboard = () => {

  const [videos,setVideos]=useState([]);

  // const history = useHistory();
  const navigate = useNavigate();

  useEffect(() => {
    getAllVideos();
  }, []);

  const getAllVideos = async () => {
    await axios.get('https://01dc1d98-9d8d-4448-b58e-62bb5b9cfb66.mock.pstmn.io/v1/videos')
    .then((response)=>{
      setVideos(response.data.videos);
      console.log(videos);
    })
  }

  const handleVideoClick = (event) =>{
    console.log(event.target.id);
    navigate("/videoPage/"+event.target.id);
  }

  return (
    <Box className="dashboard-container">
      <Box className="dashboard">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            videos.length ? (
              videos.map( (video) =>(
                  
                  
                <Grid item xs={6} md={3} key={video._id}>

                    <Card sx={{ maxWidth: 300, borderRadius: 3, cursor:"pointer", position:"relative"}}>
                      <CardMedia sx={{ height: 140 }} image={video.previewImage}/>
                      <CardContent sx={{height: 45, backgroundColor:"black", color:"whitesmoke"}}>
                        <Typography sx={{fontSize:14}}> {video.title}</Typography>
                        <Typography sx={{fontSize:12, color:"grey"}}>{video.releaseDate}</Typography>
                        <Button id={video._id} onClick={handleVideoClick} sx={{backgroundColor:"#D11D1D", opacity:0, position:"absolute", top:10,left:1, height:120,width:200}}> </Button>
                      </CardContent>
                    </Card> 

                </Grid>
              ))
            ) : 
            (
              <Box className="dashboard-loading">
                    <SentimentDissatisfied sx={{color:"whitesmoke", marginLeft:4, fontSize:50}} color="action" />
                    <h4>No Videos Found!</h4>
              </Box>
            )
          }
        </Grid>

      </Box>
    </Box>
  );
};

export default Dashboard;