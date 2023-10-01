import * as React from 'react';
import { Grid, Paper, Avatar, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Login = () => {

    const paperStyle={padding: 20, height: '70vh', width: 350, margin: "20px auto"}
    const avatarStyle={backgroundColor: '#1876d1', margin: "30px 0 0 0", width: 80, 
    height: 80, 
    fontSize: 60,}
    const btnstyle={margin: "8px 0"}
  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}><LockIcon fontSize='80'/></Avatar>
                <h1>Sign In</h1>
            </Grid>

            <Typography sx={{display: "flex", justifyContent: "center", margin: "1px 0 20px 0", fontSize: 10}}>
            <Link to="/institute">
                <Button sx={{fontSize: 20}}>Institute</Button>
            </Link>
            <Link to="/student">
                <Button sx={{fontSize: 20}}>Student</Button>
            </Link>
            </Typography>

            <TextField id="Username" label="Username" variant="outlined" fullWidth/>
            <TextField id="Password" label="Password" variant="outlined" fullWidth required sx={{margin: "20px 0"}}/>

            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />

            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign In</Button>

            <Typography>
            <Link href="#" sx={{textDecoration: 'none'}}>Forgot Password</Link>
            </Typography>
        </Paper>
    </Grid>
  );
}

export default Login;
