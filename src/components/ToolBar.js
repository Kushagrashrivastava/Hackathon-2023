import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';

const ToolBar = ({openSidebar}) => {
  return (
    <div className='tool-bar'>
        <div className='burger' >
          <Button onClick={openSidebar}>
            <MenuIcon />
            </Button>
        
        </div>
        <div className='title'><h2>Student Portal</h2></div>
    </div>
  )
}

export default ToolBar;
