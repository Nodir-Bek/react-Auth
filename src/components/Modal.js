import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Badge } from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    // border: "1px solid #000",
    borderRadius: 10,
    boxShadow: theme.shadows[10],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function InfoModal({ handleOpen, open, handleClose }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" className="text-primary">
        For example user details
      </h2>
      <p id="simple-modal-description">
        <span className="text-info text-bold">User name:</span>{" "}
        eve.holt@reqres.in
        <br />
        <span className="text-info text-bold">Password:</span> cityslicka
      </p>
      <InfoModal />
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
