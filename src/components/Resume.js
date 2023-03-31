import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row">
          <div className="six columns header-col">
            <h1>
              <span>Formation</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education.map((item) => {
              return (
                <div className="row">
                  <div className="twelve columns">
                    <h3>{item.specialization}</h3>
                    <p className="info">
                      {item.UniversityName}, {item.city}
                      <p className="date">
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </p>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Expérience professionnelle</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work.map((item) => {
              return (
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                      {item.specialization}

                      <p className="date">
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </p>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="row">
          <div className="three columns header-col">
            <h1>
              <span>Compétences</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <ul className="skills">
              {resumeData.skills.map((item) => {
                return (
                  <p>
                    <em>{item.skillname}</em>
                  </p>
                );
              })}
            </ul>
          </div>
        </div>

      </section>
    );
  }
}
