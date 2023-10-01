import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TaskIcon from '@mui/icons-material/Task';
import PhoneIcon from '@mui/icons-material/Phone';
import InfoIcon from '@mui/icons-material/Info';

const Sidebar = ({sidebar}) => {
  return (
    <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
        <li><HomeIcon />Home</li>
        <li><VerifiedUserIcon />College & Scholarship <br /> Verification </li>
        <li><TaskIcon />Documents Verification</li>
        <li><PhoneIcon />contact us</li>
        <li><InfoIcon />About us</li>
    </div>
  )
}

export default Sidebar;
