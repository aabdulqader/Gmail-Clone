import React from "react";
import "./Header.css";
import logo from "../../logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import { IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../Firebase";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="Gmail" />
      </div>
      <div className="header__center">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search" type="search" />
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutlineOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <div className="header__avatarOption">
          <Avatar
            onClick={signOut}
            className="header__avatar"
            src={user.photoUrl}
          >
            {user?.displayName[0]}
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
