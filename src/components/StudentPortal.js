import React, { useState } from 'react';
import ToolBar from './ToolBar';
import Sidebar from './Sidebar';
import Backdrop from './Backdrop';
import { Grid, Paper, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const StudentPortal = () => {
    const paperStyle={padding: 20, height: '70vh', width: 350, margin: "20px auto"}
    const avatarStyle={backgroundColor: '#1876d1',margin: "30px 0 0 0",width: 80, 
    height: 80, 
    fontSize: 60,}
    const btnstyle={margin: "8px 0"}
    const[sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar(prevState => !prevState);
    }

  return (
  <Grid>
    <div>
        <ToolBar openSidebar={toggleSidebar}/>
        <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
        <Sidebar sidebar={sidebar}/>
    </div>


<Paper elevation={10} style={paperStyle}>
    <Grid align='center'>
        <Avatar style={avatarStyle}><HomeIcon fontSize='80' /></Avatar>
        <h1 style={btnstyle}>Home</h1>
    </Grid>

    <div>
        <h2 style={btnstyle}>Steps to get verified:-</h2>
        <Link>
        <Button style={btnstyle} >College & Scholarship Verification</Button>
        </Link>
        <Link>
        <Button style={btnstyle} sx={{fontSize: 15}}>Documents Verificarion</Button>
        </Link>
        <Link>
        <Button style={btnstyle} sx={{fontSize: 15}}>Re-View Documents</Button>
        </Link>
        <Link>
        <Button style={btnstyle} sx={{fontSize: 15}}>Fees & Submition</Button>
        </Link>
    </div>

</Paper>
</Grid>
  )
}

export default StudentPortal;