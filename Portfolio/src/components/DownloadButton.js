import React, { Component } from "react";

import download from "../img/download.svg";
import resume from "../docs/Resume.pdf";
import coverletter from "../docs/CoverLetter.pdf";
export default class DownloadButton extends Component {
  render() {
    return (
      <div className="DownloadContainer">
        <div className="DownloadButton">
          <img src={download} alt="Downlaodicon" className="DownloadIcon" />
          <a className="downloadLink" href={resume} target="blank">
            Resume
          </a>
        </div>
        <div className="DownloadButton">
          <img src={download} alt="Downlaodicon" className="DownloadIcon" />
          <a className="downloadLink" href={coverletter} target="blank">
            Cover Letter
          </a>
        </div>
      </div>
    );
  }
}
