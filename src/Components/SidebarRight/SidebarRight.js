import React from "react";
import "./SidebarRight.css";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import SettingsBrightnessIcon from "@material-ui/icons/SettingsBrightness";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";

const SidebarRight = () => {
  return (
    <div className="sidebarRight">
      <IconButton>
        <CalendarTodayIcon />
      </IconButton>
      <IconButton>
        <SettingsBrightnessIcon />
      </IconButton>
      <IconButton>
        <AssignmentIcon />
      </IconButton>
      <IconButton>
        <PersonIcon />
      </IconButton>
      <IconButton className="sidebarRight__addIcon">
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default SidebarRight;
