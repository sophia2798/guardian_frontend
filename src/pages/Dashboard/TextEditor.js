import React, { useState } from "react";
import "./TextEditor.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import API from "../../utils/API";

function TextEditor(props) {
  const [reportDoc, setReportDoc] = React.useState({
    report_doc: props.data,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    API.updateWhiteboard(props.token, props.trip, reportDoc).then(() => {
      console.log("successfully saved", reportDoc);
    });
  };

  const handleInputChange = (event) => {
    setReportDoc({ report_doc: event.target.value });
  };

  React.useEffect(() => {
    setReportDoc({ report_doc: props.data });
  }, [props.data]);

  return (
    <div className="textEditor">
      <div className="textEditor__top">
        <h4>Whiteboard</h4>
        <form>
          <textarea
            className="textEditor__input"
            defaultValue={reportDoc.report_doc}
            onChange={handleInputChange}
          />
          <input
            className="login-submit-btn"
            value="SAVE"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          />
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
