import { Checkbox, IconButton } from "@material-ui/core";
import { StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectMail } from "../../features/mailSlice";
import "./Email.css";

const Email = ({ id, title, to, subject, message, time, senderPhotoUrl }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const openEmail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        message,
        time,
        to,
        senderPhotoUrl,
      })
    );
    history.push("/mail");
  };

  return (
    <div onClick={openEmail} className="email">
      <div className="email__options">
        <IconButton>
          <Checkbox />
        </IconButton>
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
      </div>
      <h3 className="email__title">
        {title ? title : to.split("@gmail.com")}{" "}
      </h3>

      <div className="email__message">
        <h4 className="email__subject">{subject} </h4> - {message}
      </div>
      <small className="email__time">
        {new Date(time?.toDate()).toUTCString()}
      </small>
    </div>
  );
};

export default Email;
