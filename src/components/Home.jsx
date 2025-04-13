import React, { useEffect } from "react";
import photo from "../assets/security.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Inline style for animated gradient background
  const sectionStyle = {
    background: "linear-gradient(270deg, #f9f9f9, #fceae9, #f9f9f9)",
    backgroundSize: "600% 600%",
    animation: "gradientShift 15s ease infinite",
    padding: "10px 0",
    borderRadius: "12px",
    marginBottom: "20px",
  };

  return (
    <>
      {/* Gradient animation via <style> tag */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <div className="container-fluid px-3" style={sectionStyle}>
        <div className="row" style={{ minHeight: "80vh" }}>
          {/* Left Column: Text */}
          <div
            className="col-12 col-md-6 d-flex flex-column justify-content-center text-center text-md-start"
            data-aos="fade-right"
          >
            <h1 className="display-4 fw-bold">Counteracting</h1>
            <h1 className="display-4 fw-bold">Misinformation &</h1>
            <h1 style={{color:"red"}}className="display-4  fw-bold">Fake News</h1>
            <div style={{ marginTop: "1rem" }}>
              <p className=""style={{color:"black"}}>
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
                maintaining{" "}
                <span style={{color:"red"}} className="fw-bold ">data integrity</span> and{" "}
                <span style={{color:"red"}} className="fw-bold ">privacy.</span>
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div
            className="col-12 col-md-6 d-flex justify-content-center align-items-center"
            data-aos="zoom-in"
          >
            <img
              src={photo}
              alt="Security"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
