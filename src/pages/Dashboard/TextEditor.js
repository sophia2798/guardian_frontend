import React, { useState, useEffect } from "react";
import "./TextEditor.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import API from "../../utils/API";

function TextEditor(props) {
  const [reportDoc, setReportDoc] = useState({
    report_doc: props.data,
  });

  console.log("texteditor props",props)

  function handleSubmit(e) {
    e.preventDefault();
    API.updateWhiteboard(props.token,props.trip,reportDoc).then(console.log(`API REQ with token ${props.token}, to trip id ${props.trip} with text ${reportDoc.report_doc}`))
  };

  function handleInputChange(event) {
    setReportDoc({ report_doc: event.target.value });
  };

  useEffect(() => {
    setReportDoc({ report_doc: props.data });
  }, [props.data]);

  return (
    <div className="textEditor">
      <div className="textEditor__top">
        <h4>Whiteboard</h4>
        <form style={{display:'flex', flexDirection:'column'}}>
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
    </div>
  );
}

export default TextEditor;
