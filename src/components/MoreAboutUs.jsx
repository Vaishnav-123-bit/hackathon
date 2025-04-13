import React, { forwardRef, useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import imagenew from "../assets/security.png";
import web from "../assets/new.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const MoreAboutUs = forwardRef((props, ref) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const mainContainerStyle = {
    padding: isMobile ? "1rem" : "0.5rem",
    borderRadius: "20px",
    maxWidth: "90%",
    margin: "1.5rem auto",
    fontFamily: "'Segoe UI', sans-serif",
    transition: "all 0.3s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <>
      <p
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "24px",
          marginTop: "50px",
          color: "red",
        }}
        data-aos="fade-down"
      >
        More About Us!
      </p>

      <div ref={ref} className="container-fluid">
        <div
          className="row align-items-center justify-content-center"
          style={mainContainerStyle}
        >
          {/* Left Column */}
          <div className="col-12 col-md-6" data-aos="fade-right">
            <h5 style={{ color: "red", fontWeight: 600 }}>Who are We ?</h5>
            <p style={{ fontWeight: 500, fontSize: "16px",color:"black" }}>
              LoopHoles is a proprietary research initiative at the forefront of
              innovation in detecting audiovisual and textual misinformation
              generated from various sources with a high degree of accuracy.
            </p>

            {/* Two-column checklist */}
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                marginTop: "1rem",
                gap: "2rem",
                flexWrap: "wrap",
              }}
            >
              {/* Column 1 */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: "column",
                  gap: "0.5rem",
                  color:"black"
                }}
              >
                {["Accurate", "Reliable", "Fast"].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: 600,
                      fontSize: "16px",
                      color: "#2c3e50",
                    }}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <FaCheckCircle style={{ color: "red", marginRight: "8px" }} />
                    {item}
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {["Secure", "Scalable", "Intuitive"].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: 600,
                      fontSize: "16px",
                      color: "#2c3e50",
                    }}
                    data-aos="fade-up"
                    data-aos-delay={index * 100 + 300}
                  >
                    <FaCheckCircle style={{ color: "red", marginRight: "8px" }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                textAlign: "center",
                marginTop: "2rem",
                gap: "0.8rem",
              }}
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <img src={imagenew} alt="" style={{ width: "50px", height: "auto" }} />
              <div style={{ padding: "0" ,color:"black"}}>
                <p style={{ fontWeight: 600, fontSize: "14px",color:"black" }}>+91 - 9876543210</p>
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: "14px"
                    ,color:"black",
                    marginTop: "-15px",
                  }}
                >
                  Cyber Cell
                </p>
              </div>
            </div>
            <div
              style={{ fontWeight: 600, fontSize: "14px", marginTop: "1rem" }}
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              cupiditate officiis ex accusantium perspiciatis corporis, deserunt
              ea eaque debitis consequuntur architecto ullam officia? Adipisci
              pariatur laborum delectus sint praesentium repellat?
            </div>
          </div>

          {/* Right Column */}
          <div
            className="col-12 col-md-6 text-center mt-4 mt-md-0"
            data-aos="zoom-in"
          >
            <div style={{ position: "relative" }}>
              <img
                src={web}
                alt="main-img"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </div>
            <div
              style={{ position: "relative", left: -20, bottom: 100, right: 0 }}
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <img
                src={web}
                alt="overlay-img"
                style={{ width: "150px", height: "80px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default MoreAboutUs;
