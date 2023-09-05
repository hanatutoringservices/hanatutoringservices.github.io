import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2 style={{ textTransform: 'none' }}>Meet the Team</h2>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" style={{ borderRadius: '100%', border: '2px solid black'}}/>
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <i>{d.job}</i>
                      <div style={{textAlign: 'left', padding: '2rem'}}>
                      {d.degrees.map((degree) => {
                        return (
                          <>
                            <p>{degree}</p>
                          </>
                        )
                      })}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
