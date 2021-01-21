import { Checkbox, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./EmailList.css";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Inbox, SupervisorAccount } from "@material-ui/icons";
import { selectUser } from "../../features/userSlice";

import Email from "./Email";
import db from "../../Firebase";
import { useSelector } from "react-redux";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  const user = useSelector(selectUser);

  document.title = `${user?.displayName} - ${user?.email} - Gmail`;

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    return () => {};
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <IconButton>
            <Checkbox />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
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

      <div className="emailList__sections">
        <div className="emailList__sectionPrimary emailList__option ">
          <Inbox />
          <h4>Primary</h4>
        </div>
        <div className="emailList__sectionSocial emailList__option">
          <SupervisorAccount />
          <h4>Social</h4>
          <p>41 new</p>
        </div>
        <div className="emailList__sectionPromotions emailList__option">
          <Inbox />
          <h4>Promotions</h4>
          <p>28 new</p>
        </div>
      </div>

      {emails.map((email) => (
        <Email
          key={emails.id}
          id={email.id}
          title={email.data.title}
          to={email.data.to}
          subject={email.data.subject}
          message={email.data.message}
          time={email.data.timestamp}
          senderPhotoUrl={email.data.senderPhotoUrl}
        />
      ))}
    </div>
  );
};

export default EmailList;
