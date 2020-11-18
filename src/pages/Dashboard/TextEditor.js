import React, { useState } from "react";
import "./TextEditor.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";

function TextEditor() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="textEditor">
      <div className="textEditor__top">
        <h4>Whiteboard</h4>
        <form>
          <textarea
            input="text"
            className="textEditor__input"
          />
          <button onClick="" type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="textEditor__bottom">
        <div className="textEditor__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Upload Video</h3>
        </div>
        <div className="textEditor__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Upload Image</h3>
        </div>
      </div>
    </div>
  );
}

export default TextEditor;
