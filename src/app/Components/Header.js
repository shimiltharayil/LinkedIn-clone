import React from 'react';
import "./CSS/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header'>
      <div className="header__left">
        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />

        </div>
      </div>
      <div className="header__right">
      <HeaderOption Icon = {HomeIcon} title="Home" />
      <HeaderOption Icon= {HomeIcon} title="My Network"/>
      <HeaderOption Icon={MarkChatUnreadIcon} title="Messages"/>
      <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
      <HeaderOption Icon={NotificationAddIcon} title="Notifications"/>
    
      </div>
    </div>
  )
}

export default Header;