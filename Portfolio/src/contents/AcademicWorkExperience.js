import React, { useState } from "react";
import download from "../img/download.svg";
import ProjectSummary from "../docs/Project_Summary.pdf";
import ProjectVision from "../docs/Project_Vision.pdf";
import ProjectRequirements from "../docs/Requirements_Analysis_and_Design.pdf";
import ProjectPlan from "../docs/Project_Plan.pdf";
import ProjectStatus from "../docs/Project_Status_Report_2.pdf";
const AcademicWorkExperience = () => {
  // state = {
  //   clickedCaps: false,
  //   clickedDev: false,
  //   clickedFull: false,
  // };

  const [clickedCaps, setClickedCaps] = useState(false);

  function clikedHandler() {
    setClickedCaps(!clickedCaps);
  }

  console.log(clickedCaps);
  return (
    <div className="condiv">
      <div className="container">
        <div className="AcademicCardContainer">
          <div className="AcademicCard" onClick={clikedHandler}>
            <h1>Capstone Project</h1>
          </div>
          <div className="AcademicCard">
            <h1>DevOps Project</h1>
          </div>
          <div className="AcademicCard">
            <h1>Full Stack Project</h1>
          </div>
        </div>
        {clickedCaps ? (
          <div className="DetailofCards">
            <div className="Icerik">
              <p className="ProjectTITLE">Capstone Project Detail</p>
              <div className="elements">
                <div className="DownloadButton">
                  <img
                    src={download}
                    alt="Downlaodicon"
                    className="DownloadIcon"
                  />
                  <a
                    className="downloadLink"
                    href={ProjectSummary}
                    target="blank"
                  >
                    Project Summary
                  </a>
                </div>
              </div>
              <div className="elements">
                <div className="DownloadButton">
                  <img
                    src={download}
                    alt="Downlaodicon"
                    className="DownloadIcon"
                  />
                  <a
                    className="downloadLink"
                    href={ProjectVision}
                    target="blank"
                  >
                    Project Vision
                  </a>
                </div>
              </div>
              <div className="elements">
                <div className="DownloadButton">
                  <img
                    src={download}
                    alt="Downlaodicon"
                    className="DownloadIcon"
                  />
                  <a
                    className="downloadLink"
                    href={ProjectRequirements}
                    target="blank"
                  >
                    Project Requirements
                  </a>
                </div>
              </div>
              <div className="elements">
                <div className="DownloadButton">
                  <img
                    src={download}
                    alt="Downlaodicon"
                    className="DownloadIcon"
                  />
                  <a className="downloadLink" href={ProjectPlan} target="blank">
                    Project Plan
                  </a>
                </div>
              </div>
              <div className="elements">
                <div className="DownloadButton">
                  <img
                    src={download}
                    alt="Downlaodicon"
                    className="DownloadIcon"
                  />
                  <a
                    className="downloadLink"
                    href={ProjectStatus}
                    target="blank"
                  >
                    Project Status Report
                  </a>
                </div>
              </div>
              <div class="DownloadButton">
                <a
                  className="downloadLink"
                  href="https://github.com/onurkazman/TurkTrade_Website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github"></i>
                  Project repository
                </a>
              </div>
              <div className="elements">
                <div className="DownloadButton">
                  <a
                    className="downloadLink"
                    href="https://turktrade.ca"
                    target="blank"
                  >
                    Click to website
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default AcademicWorkExperience;
