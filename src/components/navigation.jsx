import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <div display="flex" direction="row">
                <a href="#page-top" style={{textTransform: 'none', color: "black", fontFamily: "Raleway", fontWeight: 700, fontSize: 24, marginLeft: '1.5rem' }}>
                <img width="50px" src="img/hana_logo.svg" style={{ marginRight: '1rem' }}/>Hana Tutoring
                </a>
          </div>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#page-top" className="page-scroll" style={{ textTransform: 'none', fontWeight: 700 }}>
                About
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll" style={{ textTransform: 'none', fontWeight: 700 }}>
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll" style={{ textTransform: 'none', fontWeight: 700 }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
