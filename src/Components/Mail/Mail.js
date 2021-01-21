import { Avatar, Button, IconButton } from "@material-ui/core";
import React from "react";
import "./Mail.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import DeleteIcon from "@material-ui/icons/Delete";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EmailIcon from "@material-ui/icons/Email";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import FolderIcon from "@material-ui/icons/Folder";
import { useHistory } from "react-router-dom";
import { ArrowDropDown } from "@material-ui/icons";
import ReplyIcon from "@material-ui/icons/Reply";
import ForwardIcon from "@material-ui/icons/Forward";
import { useSelector } from "react-redux";
import { selectOpenMail } from "../../features/mailSlice";

const Mail = () => {
  const history = useHistory();

  const selectedMail = useSelector(selectOpenMail);
  console.log(selectedMail);

  document.title = `${selectedMail?.subject} - ${selectedMail?.title} - Gmail`;

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>

          <div className="mail__icons">
            <IconButton>
              <MoveToInboxIcon />
            </IconButton>
            <IconButton>
              <ErrorIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </div>
          <div className="mail__icons">
            <IconButton>
              <EmailIcon />
            </IconButton>
            <IconButton>
              <WatchLaterIcon />
            </IconButton>
            <IconButton>
              <CheckCircleIcon />
            </IconButton>
          </div>
          <div className="mail__icons">
            <IconButton>
              <FolderIcon />
            </IconButton>
            <IconButton>
              <LabelImportantIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </div>
      </div>

      <div className="mail__body">
        <h2 className="mail__subject">{selectedMail?.subject}</h2>
        <div className="mail__details">
          <Avatar className="mail__avatar" src={selectedMail?.senderPhotoUrl}>
            {selectedMail?.title[0] || selectedMail?.to[0]}
          </Avatar>
          <div className="mail__info">
            <div>
              <div className="mail__detailsTop">
                <h3>{selectedMail?.title || selectedMail?.to}</h3>
                <small>
                  {new Date(selectedMail?.time.toDate()).toUTCString()}
                </small>
              </div>
              <small className="mail__sender">
                to me <ArrowDropDown />
              </small>
            </div>
            <p className="mail__message">{selectedMail?.message}</p>
          </div>
        </div>
        <div className="mail__buttons">
          <Button className="mail__button">
            {" "}
            <ReplyIcon />
            Reply
          </Button>
          <Button className="mail__button">
            <ForwardIcon /> Forward
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Mail;
