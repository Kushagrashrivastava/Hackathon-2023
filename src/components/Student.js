import * as React from 'react';
import { Grid, Paper, Avatar, TextField, Typography } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Student = () => {
    const paperStyle={padding: 20, height: '70vh', width: 350, margin: "20px auto"}
    const avatarStyle={backgroundColor: '#1876d1',margin: "30px 0 0 0",width: 80, 
    height: 80, 
    fontSize: 60,}
    const btnstyle={margin: "8px 0"}
  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}><VerifiedUserIcon fontSize='80' /></Avatar>
                <h1>Verification</h1>
            </Grid>

            <TextField id="Aadhar Number" label="Aadhar Number" variant="outlined" fullWidth/>
            <TextField id="OTP" label="OTP" variant="outlined" fullWidth required sx={{margin: "20px 0"}}/>

            <Link to="/studentPortal">
            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Submit <KeyboardArrowUpIcon />
            </Button>
            </Link>

        </Paper>
    </Grid>
  );
}

export default Student;
