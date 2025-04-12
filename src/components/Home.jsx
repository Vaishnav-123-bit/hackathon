import React from "react";
import photo from "../assets/security.png";

const Home = () => {
  return (
    <>
      <div className="container-fluid" style={{marginBottom:"20px"}}>
        <div className="row" style={{ minHeight: "80vh" }}>
          {/* Left Column: Text */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center px-4 py-5">
            <h1 style={{ fontWeight: 900, fontSize: "40px" }}>Counteracting</h1>
            <h1 style={{ fontWeight: 900, fontSize: "40px" }}>
              Misinformation &{" "}
            </h1>
            <h1 style={{ color: "red", fontWeight: 900, fontSize: "40px" }}>
              Fake News
            </h1>
            <div style={{ marginTop: "1rem" }}>
              <p style={{ fontWeight: 400, fontSize: "15px" }}>
                Data security refers to the practice of protecting sensitive
                information from unauthorized access, use, disclosure, or
                destruction. It involves several key components such as
                encryption, which converts data into a secure format; firewalls,
                which act as barriers to prevent unauthorized access; and
                password protection, ensuring that only authorized users can
                access certain data. Other essential concepts include backups,
                which create copies of data for recovery in case of loss, and
                multi-factor authentication, adding an extra layer of security
                by requiring more than just a password. Ensuring proper access
                control and regular software updates is also crucial in
                maintaining <span style={{color:"red",fontWeight:600}}> data integrity</span> and <span color="red" style={{color:"red",fontWeight:600}}> privacy.</span>
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={photo}
              alt="Security"
              className="img-fluid"
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
