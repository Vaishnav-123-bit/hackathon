import React from "react";
import {
  FaLock,
  FaInfoCircle,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-5 border-top border-secondary">
      <div className="container-fluid px-3">
        <div className="row align-items-center text-center text-md-start">
          {/* Section 1: Cybersecurity */}
          <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
            <FaLock color="red" size={20} />
            <span style={{ fontWeight: 900 }} className="fs-5 text-white">
              Fake<span style={{ color: "red" }}>C</span>heck{" "}
              <span style={{ color: "red" }}>!</span>
            </span>
          </div>

          {/* Section 2: Social Links */}
          <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-center gap-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover-effect"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover-effect"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover-effect"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover-effect"
            >
              <FaInstagram size={20} />
            </a>
          </div>

          {/* Section 3: Copyright */}
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end gap-2">
            <FaInfoCircle size={18} />
            <small className="text-secondary">
              &copy; {currentYear} All rights reserved.
            </small>
          </div>
        </div>
      </div>

      {/* Optional Hover Effect Styling */}
      <style>
        {`
          .hover-effect:hover {
            color: #70a1ff !important;
            transition: color 0.3s ease;
          }

          /* Prevent overflow */
          .container-fluid {
            padding-left: 15px;
            padding-right: 15px;
          }

          /* Responsive: Adjust text size and icon size for small screens */
          @media (max-width: 576px) {
            .fs-5 {
              font-size: 18px;
            }

            .fa-lock, .fa-info-circle, .fa-facebook, .fa-twitter, .fa-linkedin, .fa-instagram {
              font-size: 18px;
            }

            .container-fluid {
              padding-left: 10px;
              padding-right: 10px;
            }

            .row {
              flex-direction: column; /* Stack the columns vertically on small screens */
            }

            .d-flex {
              justify-content: center; /* Center items in small screens */
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
