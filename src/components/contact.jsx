import { useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import emailjs from "emailjs-com";
import React from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  boxShadow: 24,
  p: 4,
  outline: 0,
  borderRadius: '2rem',
  padding: '3rem',
};

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [open, setOpen] = useState(false);
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    emailjs
      .sendForm("service_sbslqy2", "template_dvo8ugj", e.target, "C0SjSV_J0VeoPp6hM")
      .then(
        () => {
          clearState();
        },
        (error) => {
          clearState();
        }
      );
  };
  return (
    <div>
      <Modal open={open}>
        <Box style={style}>
          <h4 style={{fontWeight: 700, color: "#58ad6f"}}>
            Your message was successfully sent!
          </h4>
          <p style={{textAlign: 'center', marginTop: '2rem'}}>
            You'll hear back from us shortly. 
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
          <button onClick={() => setOpen(false)} style={{ borderRadius: '1rem', border: 'none', color: '#58ad6f', width: '6rem'}}>Close</button>
          </div>
      </Box>
      </Modal>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2 style={{ textTransform: 'none' }}>Get In Touch</h2>
                <p>
                  Please reach out with any questions or inquiries and we will
                  get back to you as soon as possible.
                </p>
                <p>
                  If you would like to inquire over the phone, please let us know in your message below.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        style={{ borderRadius: '5rem'}}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        style={{ borderRadius: '5rem'}}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    style={{ borderRadius: '2rem'}}
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <h3 style={{ fontWeight: 700 }}>Contact Info</h3>
            <div className="contact-item">
              <p>
                <span style={{ fontWeight: 700 }}>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Hana Tutoring Services.
          </p>
        </div>
      </div>
    </div>
  );
};
