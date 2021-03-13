import React, { Component } from "react";
import Widecard from "../components/Widecard";
import ExperienceCard from "../components/ExperienceCard";

import Atez from "../img/Atez.jpg";
import DownlandButton from "../components/DownloadButton";

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myskills: ["HTML", "CSS", "JS", "REACT JS", "EXPRESS JS", "ANGULAR JS"],
    };
  }

  render() {
    return (
      <div className="condiv">
        <h1 className="ResumePageTitle">My Resume</h1>
        <h1 className="subtopic">My experience</h1>
        <ExperienceCard
          title="Software Developer"
          pic={Atez}
          where="ATEZ Yazilim Teknolojileri A.S"
          from="Sept 2020"
          to="Present"
          country="Istanbul,Turkey"
        />
        <h1 className="subtopic">My Education</h1>
        <Widecard
          title="Computer Programming and Analysis"
          where="George Brown College"
          from="2018"
          to="Present"
        />
        <Widecard
          title="High School Diploma"
          where="Fusun Yonder Anatolian High School"
          from="2010"
          to="2014"
        />

        <div className="skills">
          <h1 className="subtopic">My Skills</h1>
          <ul>
            {this.state.myskills.map((value) => {
              return <li>{value}</li>;
            })}
          </ul>
        </div>
        <DownlandButton />
      </div>
    );
  }
}
