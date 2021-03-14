import React, { useState } from "react";

import pic from "../img/quality.png";
export default function ProfessionalSummary() {
  const [clickedCaps, setClickedCaps] = useState(false);

  function clikedHandler() {
    setClickedCaps(!clickedCaps);
  }
  return (
    // <div className="condiv">
    //   <h1>Quality Documentation App with React js</h1>
    //   <a
    //     className="downloadLink"
    //     href="https://dev-crmkalite.singlewindow.io/"
    //     target="blank"
    //   >
    //     <img
    //       className="WorkPics"
    //       title="Quality Documentation App"
    //       alt=""
    //       src={pic}
    //     />
    //   </a>
    // </div>.
    <div className="condiv">
      <div className="container">
        <div className="AcademicCardContainer">
          <div className="ProfessionalCard" onClick={clikedHandler}>
            <h1>Quality Documentation App with React js</h1>
          </div>
        </div>
      </div>
      {clickedCaps ? (
        <div className="ProfessionalCards">
          <div className="Icerik">
            <p className="ProjectTITLE">Project Detail</p>
            <div className="elements">
              <div className="CollapseButton">
                <a
                  className="ProjectLink"
                  href="https://dev-crmkalite.singlewindow.io/"
                  target="blank"
                >
                  <img
                    className="WorkPics"
                    title="Quality Documentation App"
                    alt=""
                    src={pic}
                  />
                  <ul className="listItem">
                    <li>React js</li>
                    <li>Loopback 4</li>
                    <li>PostgreSQL</li>
                  </ul>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
