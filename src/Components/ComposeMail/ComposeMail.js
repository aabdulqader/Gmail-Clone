import { Button } from "@material-ui/core";
import React from "react";
import "./ComposeMail.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import firebase from "firebase";
import {
  ArrowDropDown,
  AttachFile,
  Close,
  Delete,
  InsertEmoticon,
  Remove,
  TextFormat,
} from "@material-ui/icons";
import db from "../../Firebase";
import userEvent from "@testing-library/user-event";
import { selectUser } from "../../features/userSlice";
const ComposeMail = () => {
  const dispatch = useDispatch(closeSendMessage);
  const user = useSelector(selectUser);

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (formData) => {
    db.collection("emails").add({
      title: user.displayName,
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      senderPhotoUrl: user.photoUrl,
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="composeMail">
      <div className="composeMail__header">
        <h4>New Message</h4>
        <div>
          <Remove />
          <Close onClick={() => dispatch(closeSendMessage())} />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register({ required: true })}
          name="to"
          placeholder="Recipients"
          type="email"
        />
        <p>
          {errors.to && (
            <p className="composeMail__InputError">Enter Receiver Email*</p>
          )}
        </p>
        <input
          ref={register({ required: true })}
          name="subject"
          placeholder="Subject"
          type="text"
        />
        <p>
          {errors.subject && (
            <p className="composeMail__InputError">Subject Required*</p>
          )}
        </p>
        <textarea
          ref={register({ required: true })}
          name="message"
          type="text"
        />
        {errors.message && (
          <p className="composeMail__InputError"> Message Required*</p>
        )}
        <div className="composeMail__options">
          <Button type="submit">
            Send <ArrowDropDown />
          </Button>
          <TextFormat />
          <AttachFile />
          <InsertEmoticon />
          <Delete />
        </div>
      </form>
    </div>
  );
};

export default ComposeMail;
