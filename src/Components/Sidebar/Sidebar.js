import { Button, IconButton } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import { SidebarOption } from "./SidebarOption";
import StarIcon from "@material-ui/icons/Star";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SendIcon from "@material-ui/icons/Send";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NoteIcon from "@material-ui/icons/Note";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../features/mailSlice";

const sidebarOptions = [
  {
    Icon: InboxIcon,
    title: "Inbox",
    selected: true,
    number: 356,
  },
  {
    Icon: StarIcon,
    title: "Starred",
    number: 19,
  },
  {
    Icon: LabelImportantIcon,
    title: "Important",
    number: 124,
  },

  {
    Icon: WatchLaterIcon,
    title: "Snoozed",
    number: "",
  },
  {
    Icon: SendIcon,
    title: "sent",
    number: 35,
  },
  {
    Icon: NoteIcon,
    title: "drafts",
    number: 2,
  },
  {
    Icon: ExpandMoreIcon,
    title: "more",
    number: "",
  },
];

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button onClick={() => dispatch(openSendMessage())}>
        {" "}
        <AddIcon className="buttonIcon" fontSize="large" />
        Compose
      </Button>

      {sidebarOptions.map(({ Icon, title, number, selected }) => (
        <SidebarOption
          selected={selected}
          Icon={Icon}
          title={title}
          number={number}
        />
      ))}

      <div className="sidebar__footer">
        <div className="sidebar__footerIcon">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
