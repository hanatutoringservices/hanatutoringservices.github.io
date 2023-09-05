import React from "react";

export const About = (props) => {
  return (
    <div id="about" style={{ marginTop: '6rem' }}>
      <div className="container">
        <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="col-xs-12 col-md-8">
            <div className="about-text">
              <h2 style={{ textTransform: 'none' }}>Welcome to Hana Tutoring Services!</h2>
              <p>Our amazing team has vast knowledge spanning over and beyond the <strong>Ontario High School Curriculum</strong>. Paired with years of professional teaching experience and invaluable first-hand experience of Ontario's university programs, we are passionate for providing the best tutoring experience for you.</p>
              <p>Our services are currently being offered <strong>virtual-first</strong>, starting at <strong style={{ color: "#58ad6f"}}>$60/hour</strong>.</p>
              <h3>Subjects Covered (Grades 9-12):</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
