import React, { forwardRef, useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import caseImg from "../assets/newReport.jpg";
import analyzeImg from "../assets/new.jpg";
import reportImg from "../assets/report.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState("case");
  const [animateKey, setAnimateKey] = useState(0); // trigger animation on tab switch

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      setAnimateKey(prev => prev + 1); // force re-render with animation
    }
  };

  const data = {
    case: {
      title: "Create a Case",
      img: caseImg,
      features: [
        "Multi-Format Support – Accepts various content types, including audio, video, text, and news articles.",
        "Automated Metadata Extraction – Gathers crucial details like timestamps, sources, and patterns for better analysis.",
        "User-Friendly Submission – Simple and intuitive process for uploading or entering content for verification.",
      ],
    },
    analyze: {
      title: "Analyze",
      img: analyzeImg,
      features: [
        "Real-time Analysis – Detects fake news patterns on the fly.",
        "AI/ML Models – Utilizes advanced models for pattern recognition.",
        "Visual Insights – Get dashboards and insights for deeper understanding.",
      ],
    },
    report: {
      title: "Generate Reports",
      img: reportImg,
      features: [
        "Detailed Reports – Generate reports with complete metadata.",
        "Export Options – Download in PDF, CSV, and more.",
        "Audit Trail – Maintain logs for future verification.",
      ],
    },
  };

  const currentData = data[activeTab];

  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div ref={ref} className="container my-5 py-5" id="how-it-works">
      {/* Header */}
      <h2
        className="text-center fw-bold mb-4"
        style={{ color: "red", fontSize: "24px", letterSpacing: "1px" }}
        data-aos="fade-down"
      >
        How It Works!
      </h2>

      {/* Integrated Nav */}
      <div
        className="d-flex justify-content-center mb-4 flex-column flex-md-row" // added flex-column for small screens
        style={{
          backgroundColor: "#f1f1f1",
          borderRadius: "30px",
          padding: "6px",
          maxWidth: "fit-content",
          margin: "0 auto",
        }}
      >
        {["case", "analyze", "report"].map((tab) => {
          const isActive = activeTab === tab;
          const label =
            tab === "case"
              ? "Create a Case"
              : tab === "analyze"
              ? "Analyze"
              : "Generate Reports";

          return (
            <button
              key={tab}
              className="nav-link"
              onClick={() => handleTabChange(tab)}
              style={{
                backgroundColor: isActive ? "red" : "transparent",
                color: isActive ? "white" : "#333",
                border: "none",
                borderRadius: "30px",
                padding: "10px 30px",
                fontWeight: "600",
                transition: "background-color 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: isActive ? "0 2px 6px rgba(0,0,0,0.1)" : "none",
                transform: isActive ? "scale(1.1)" : "scale(1)",
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Section Content */}
      <div
        key={animateKey}
        className="row align-items-center shadow rounded-4 p-4 bg-white"
        data-aos="fade-up" // AOS fade-in effect on section content
        data-aos-anchor-placement="top-bottom" // This will ensure the animation is triggered when it's visible in the viewport
        style={{
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        {/* Left: Features */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h5
            className="fw-semibold mb-4"
            style={{ fontSize: "22px", color: "#2d3436" }}
          >
            {currentData.title}
          </h5>

          {currentData.features.map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-center gap-3 border rounded-4 p-3 mb-3 bg-light"
              style={{
                fontSize: "15px",
                fontWeight: "500",
                lineHeight: "1.6",
                borderColor: "#ececec",
                transition: "all 0.3s ease",
              }}
            >
              <FaCheck style={{ color: "red", fontSize: "16px" }} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img
            src={currentData.img}
            alt={currentData.title}
            className="img-fluid rounded-4 shadow-sm"
            style={{
              maxHeight: "400px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      {/* Fade In/Out Transition Styles */}
      <style>{`
        .fade-in-out {
          animation: fadeInOut 0.5s ease-in-out;
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
          }
          50% {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
          }
        }

        .fade-in-out.show {
          animation: fadeInOut 1s ease-in-out;
        }
      `}</style>
    </div>
  );
});

export default HowItWorks;
