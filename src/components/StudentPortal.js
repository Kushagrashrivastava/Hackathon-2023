import React, { useState } from 'react';
import ToolBar from './ToolBar';
import Sidebar from './Sidebar';
import Backdrop from './Backdrop';
import { Grid, Paper, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import UploadIcon from '@mui/icons-material/Upload';
// import { Link } from 'react-router-dom';

const StudentPortal = () => {
    const paperStyle={padding: 20, height: '70vh', width: 350, margin: "20px auto"};
    const avatarStyle={backgroundColor: '#1876d1',margin: "30px 0 0 0",width: 80, 
    height: 80, 
    fontSize: 60,};
    const btnstyle={margin: "8px 0"};
    const[sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar(prevState => !prevState);
    };
    const rectangle = {width: '200px', height: '100px', border: '2px solid black', display: 'flex',         
    justifyContent: 'center', 
    alignItems: 'center'};

  return (
  <Grid>
    <div>
        <ToolBar openSidebar={toggleSidebar}/>
        <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
        <Sidebar sidebar={sidebar}/>
    </div>


<Paper elevation={10} style={paperStyle}>
    <Grid align='center'>
        <Avatar style={avatarStyle}><PersonIcon fontSize='80' /></Avatar>
        <h1 style={btnstyle}>Student Portal</h1>
    </Grid>

    <h2>Document</h2>
    <div style={rectangle}>
        Document
        </div>
    <h2>Fetch Documents</h2>
    <div style={rectangle}>Fetch Documents</div>
    <h2>Upload Document</h2>
    <div style={rectangle}>Upload Document</div>

</Paper>
</Grid>
  )
}

export default StudentPortal;