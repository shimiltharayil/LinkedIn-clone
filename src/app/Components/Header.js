import React from 'react';
import "./CSS/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import LogoutIcon from '@mui/icons-material/Logout';

import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/counter/userSlice';
import { auth } from '../../firebase';

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
      dispatch(logout())
      auth.signOut();
  };

  return (
    <div className='header'>
      <div className="header__left">
        <img src="https://scontent.fcok15-1.fna.fbcdn.net/v/t1.6435-9/50023981_10155975057727823_5410490609100128256_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=103&ccb=1-7&_nc_sid=7aed08&_nc_ohc=SphW0aSwUi0AX-xRZdP&_nc_ht=scontent.fcok15-1.fna&oh=00_AT9NIQIHYFMtUyn77Ub_etO148pOrjRP8hXDuDFEhiMjAA&oe=633DBA32" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />

f         </div>
      </div>
      <div className="header__right">
      <HeaderOption Icon = {HomeIcon} title="Home" />
      <HeaderOption Icon= {HomeIcon} title="My Network"/>
      <HeaderOption Icon={MarkChatUnreadIcon} title="Messages"/>
      <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
      <HeaderOption Icon={NotificationAddIcon} title="Notifications"/>
      <HeaderOption Icon={LogoutIcon} onClick={logoutOfApp} title="Log Out"/>
    
      </div>
    </div>
  )
}

export default Header;