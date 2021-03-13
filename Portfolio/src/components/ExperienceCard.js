import React, { Component } from "react";

export default class ExperienceCard extends Component {
  render() {
    return (
      <div class="widecard">
        <div class="compdet">
          <h3>{this.props.title}</h3>
          <h4 class="secondtext">
            <img alt="logo" src={this.props.pic} class="logo" />
            {this.props.where}
          </h4>
          <h4 class="secondtext">
            {this.props.from} - {this.props.to}
          </h4>
          <h4 class="secondtext">{this.props.country}</h4>
        </div>
      </div>
    );
  }
}
