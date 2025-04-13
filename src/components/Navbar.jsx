import React, { useState } from "react";
import { useUser } from "../context/UserContext";

const Navbar = ({ scrollToMainSection, scrollToAboutUs, scrollToHowItWorks,scrollToWhatsApp }) => {
  const { user } = useUser();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track active section

  const handleAuthAction = () => {
    if (user) {
      alert("Redirecting to raise query form...");
    } else {
      setShowLoginModal(true);
    }
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 position-sticky top-0" style={{ zIndex: 9999 }}>
        <a className="navbar-brand  " href="#" style={{fontWeight:800,fontSize:"24px"}}>
          Fake<span style={{ color: "red" }}>C</span>heck<span style={{ color: "red" }}> !</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto gap-lg-4 text-center">
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === "home" ? "border-bottom border-3 border-danger" : ""}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  handleNavClick("home");
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link ${activeSection === "about" ? "border-bottom border-3 border-danger" : ""}`}
                onClick={() => {
                  scrollToAboutUs();
                  handleNavClick("about");
                }}
                style={{ cursor: "pointer" }}
              >
                About
              </span>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === "howItWorks" ? "border-bottom border-3 border-danger" : ""}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHowItWorks(); // Trigger smooth scroll to "How it Works" section
                  handleNavClick("howItWorks");
                }}
              >
                How it Works
              </a>
            </li>
         

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Team
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === "whatsApp" ? "border-bottom border-3 border-danger" : ""}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToWhatsApp() // Trigger smooth scroll to "How it Works" section
                  handleNavClick("whatsApp");
                }}
              >
              WhatsApp
              </a>
            </li>
            <li className="nav-item">
              <span
                className="nav-link fw-bold"
                onClick={scrollToMainSection}
                style={{ cursor: "pointer", color: "red" }}
              >
                #FactCheck
              </span>
            </li>
          </ul>

          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary px-4 py-2 fw-semibold"
              style={{ fontSize: "14px" }}
              onClick={handleAuthAction}
            >
              Create a Case
            </button>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {showLoginModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1050,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "1.5rem",
              borderRadius: "8px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              minWidth: "90%",
              maxWidth: "400px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <button
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                border: "none",
                background: "none",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#333",
                cursor: "pointer",
              }}
              onClick={() => setShowLoginModal(false)}
            >
              ×
            </button>

            <h2 style={{ marginBottom: "1rem", fontSize: "24px", fontWeight: 800 }}>
              {isSignUp ? "Sign Up" : "Login"}
            </h2>

            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                width: "100%",
              }}
              onSubmit={(e) => {
                e.preventDefault();
                alert(`${isSignUp ? "Signed up!" : "Logged in!"}`);
                setShowLoginModal(false);
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="form-control"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="form-control"
              />

              {isSignUp && (
                <input
                  type="text"
                  name="username"
                  placeholder="Full Name"
                  required
                  className="form-control"
                />
              )}

              <button
                type="submit"
                className={`btn ${isSignUp ? "btn-success" : "btn-primary"} fw-semibold`}
              >
                {isSignUp ? "Sign Up" : "Login"}
              </button>
            </form>

            <p
              style={{
                marginTop: "1rem",
                cursor: "pointer",
                color: "#007bff",
              }}
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp
                ? "Already have an account? Login"
                : "Don't have an account? Sign Up"}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
