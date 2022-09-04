import React from 'react';
import "./CSS/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/Supervisoraccount';


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
      <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
      <HeaderOption />
      <HeaderOption />
      </div>
    </div>
  )
}

export default Header;