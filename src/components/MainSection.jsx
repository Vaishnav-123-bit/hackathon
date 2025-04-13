import React, { useState, useEffect, forwardRef } from "react";
import {
  FaTextHeight,
  FaImage,
  FaMicrophoneAlt,
  FaVideo,
} from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import { LuBrainCircuit } from "react-icons/lu";
const MainSection = forwardRef((props, ref) => {
  const [activeSection, setActiveSection] = useState("text");
  const [isLoading, setIsLoading] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("");
  const [textInput, setTextInput] = useState(""); // Added state for text input

  const sections = [
    { key: "text", label: "Text Input", icon: <FaTextHeight /> },
    { key: "image", label: "Image", icon: <FaImage /> },
    { key: "audio", label: "Audio", icon: <FaMicrophoneAlt /> },
    { key: "video", label: "Video", icon: <FaVideo /> },
  ];
console.log(activeSection)
  // const processText = (text) => { /* Your logic */ };
const processImage = (image) => { /* Your logic */ };
// const processAudio = (audio) => { /* Your logic */ };
const processAudio = (file) => {
  console.log("Processing audio file:", file);
  // API call or logic goes here
};

const processVideo = (file) => { /* Your logic */
  console.log("hello",file)
  
 };



  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setAnimating(true);
    const timeout = setTimeout(() => setAnimating(false),10000);
    return () => clearTimeout(timeout);
  }, []);

  const handleAnalyze = () => {
    // Validation
    if (activeSection === "text" && !textInput.trim()) {
      alert("Please enter some input before analyzing.");
      return;
    }
  
    if (["image", "video", "audio"].includes(activeSection) && !fileInput) {
      alert("Please upload a file before analyzing.");
      return;
    }
  
    // Analysis Progress Simulation
    const runAnalysis = (type) => {
      setLoading(true);
      setProgress(0);
      setLoadingText("Initializing analysis...");
  
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 10;
          if (newProgress >= 100) {
            clearInterval(interval);
            setLoading(false);
            setLoadingText("Analysis complete!");
            return 100;
          }
          if (newProgress === 25)
            setLoadingText("25% complete: Preparing data...");
          if (newProgress === 50)
            setLoadingText("50% complete: Analyzing...");
          if (newProgress === 75)
            setLoadingText("75% complete: Almost there...");
          return newProgress;
        });
      }, 500);
  
      // Call the appropriate process function
      switch (type) {
        case "text":
          processText(textInput);
          break;
        case "image":
          processImage(fileInput);
          break;
        case "video":
          processVideo(fileInput);
          break;
        case "audio":
          processAudio(fileInput);
          break;
        default:
          alert("Unsupported content type.");
      }
    };
  
    // Trigger analysis
    runAnalysis(activeSection);
  };
  

  
  
  const [fileInput, setFileInput] = useState(null);

  const renderInputField = () => {
    // switch (activeSection) {
    //   case "text":
    //     return (
    //       <>
    //         <div style={headingStyle}>
    //           <FaTextHeight /> Text Input
    //         </div>
    //         <textarea
    //           placeholder="Type your message..."
    //           rows={6}
    //           style={inputStyle}
    //           value={textInput} // Bind the text input to the state
    //           onChange={(e) => setTextInput(e.target.value)} // Update the state on text change
    //         />
    //       </>
    //     );
    //   case "image":
    //     return (
    //       <>
    //         <div style={headingStyle}>
    //           <FaImage /> Upload Image
    //         </div>
    //         <input type="file" accept="image/*" style={inputStyle} />
    //       </>
    //     );
    //   case "audio":
    //     return (
    //       <>
    //         <div style={headingStyle}>
    //           <FaMicrophoneAlt /> Upload Audio
    //         </div>
    //         <input type="file" accept="audio/*" style={inputStyle} />
    //       </>
    //     );
    //   case "video":
    //     return (
    //       <>
    //         <div style={headingStyle}>
    //           <FaVideo /> Upload Video
    //         </div>
    //         <input type="file" accept="video/*" style={inputStyle} />
    //       </>
    //     );
    //   default:
    //     return null;
    // }
    switch (activeSection) {
      case "text":
        return (
          <>
            <div style={headingStyle}>
              <FaTextHeight /> Text Input
            </div>
            <textarea
              placeholder="Type your message..."
              rows={6}
              style={inputStyle}
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />
          </>
        );
    
      case "image":
        return (
          <>
            <div style={headingStyle}>
              <FaImage /> Upload Image
            </div>
            <input
              type="file"
              accept="image/*"
              style={inputStyle}
              onChange={(e) => setFileInput(e.target.files[0])}
            />
          </>
        );
    
      case "audio":
        return (
          <>
            <div style={headingStyle}>
              <FaMicrophoneAlt /> Upload Audio
            </div>
            <input
              type="file"
              accept="audio/*"
              style={inputStyle}
              onChange={(e) => setFileInput(e.target.files[0])}
            />
          </>
        );
    
      case "video":
        return (
          <>
            <div style={headingStyle}>
              <FaVideo /> Upload Video
            </div>
            <input
              type="file"
              accept="video/*"
              style={inputStyle}
              onChange={(e) => setFileInput(e.target.files[0])}
            />
          </>
        );
    
      default:
        return null;
    }
    
  };
  const [fakeNewResult, setFakeNewsResult] = useState(null);
  const [textResult, setTextResult] = useState("");
  const domain = "https://fcb5-152-52-34-131.ngrok-free.app";
  const processText = async (text) => {
    setLoading(true);
    try {
      console.log("arrived 2");

      // Making the POST request to the API
      // console.log(text)

      const response = await fetch(`${domain}/submit-text/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      console.log(response);

      console.log("arrived 3");

      // Parsing the response data
      const data = await response.json();
      console.log("API Response:", data);
      

      // Process AI detection result
      if (data.ai_detection) {
          setTextResult({
              aiDetection:
                  data.ai_detection.label === "AI Generated"
                      ? "AI Generated"
                      : data.ai_detection.label === "Human Written"
                          ? "Human Written"
                          : data.ai_detection.label,
              certainty: data.ai_detection.certainty || "Not available",
          });
      } else {
          setTextResult(null);
      }

      // Process fake news detection result
      if (data.fake_news_detection) {
          setFakeNewsResult({
              label: data.fake_news_detection.label || "Unable to detect",
              confidence: data.fake_news_detection.confidence || "Not available",
              confidence_level: data.fake_news_detection.confidence_level || "Not available",
              summary: data.fake_news_detection.summary || "",
              sources: data.fake_news_detection.sources || "",
              topic_classification: data.fake_news_detection.topic_classification || "Not available",
          });
      } else {
          setFakeNewsResult(null);
      }
    } catch (error) {
      console.error("Error processing the text:", error);

      // Error handling in case of failure
      setTextResult({
        aiDetection: "Error processing the text.",
        certainty: "Not available",
      });
      setFakeNewsResult({
        label: "Error",
        confidence: "Not available",
        summary: "Error processing the text",
        sources: "",
        topic_classification: "Error",
      });
    } finally {
      // Set loading to false and stop animation after processing
      setIsLoading(false);
      stopProcessingAnimation();
      setLoading(false);
    }
  };


  const stopProcessingAnimation = () => {
    setAnimating(false); // Stops the animation
    setProgress(100); // Optionally, set the progress to 100 to show completion
    setLoadingText("Analysis complete!"); // Optional: Update loading text after completion
  };

  // Inline styles
  const mainContainerStyle = {
    padding: isMobile ? "1rem" : "2rem",
    border: "2px solid #d1d9e6",
    borderRadius: "20px",
    background: "linear-gradient(145deg, #ffffff, #f0f2f5)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    maxWidth: "80%",
    margin: "2.5rem auto",
    fontFamily: "'Segoe UI', sans-serif",
    transition: "all 0.3s ease-in-out",
  };

  const tabContainerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "1rem",
    marginBottom: "1.5rem",
  };

  const tabButtonStyle = (isActive) => ({
    flex: 1,
    padding: isMobile ? "0.75rem 1rem" : "0.75rem 1.5rem",
    fontSize: "1rem",
    fontWeight: 600,
    color: isActive ? "#2d3436" : "#7f8c8d",
    backgroundColor: isActive ? "#ecf0f1" : "#ffffff",
    border: `2px solid ${isActive ? "#dcdde1" : "#e0e0e0"}`,
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    boxShadow: isActive ? "0 6px 14px rgba(0, 0, 0, 0.05)" : "none",
    width: isMobile ? "100%" : "auto",
  });

  const contentWrapperStyle = {
    padding: isMobile ? "1rem" : "1.5rem",
    backgroundColor: "#ffffff",
    border: "1px solid #e0e6eb",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.03)",
    fontSize: "1rem",
    color: "#2c3e50",
    lineHeight: "1.6",
    transition: "all 0.3s ease",
    opacity: animating ? 0 : 1,
    transform: animating ? "translateY(10px)" : "translateY(0)",
  };

  const headingStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "1.25rem",
    fontWeight: 700,
    marginBottom: "1rem",
    color: "#2d3436",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.85rem 1rem",
    borderRadius: "10px",
    border: "1px solid #dcdde1",
    backgroundColor: "#f9f9fa",
    fontSize: "1rem",
    color: "#2c3e50",
    resize: "vertical",
    transition: "all 0.3s ease-in-out",
  };

  const loadingContainerStyle = {
    display: "block",
    maxWidth: "80%",
    margin: "1rem auto",
    padding: "1.5rem",
    border: "1px solid #d1d9e6",
    borderRadius: "12px",
    backgroundColor: "#f9f9fa",
    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.05)",
    textAlign: "center",
    fontFamily: "'Segoe UI', sans-serif",
  };

  const progressBarOuter = {
    width: "100%",
    height: "12px",
    backgroundColor: "#e0e0e0",
    borderRadius: "10px",
    marginTop: "1rem",
  };

  const progressBarInner = {
    width: `${progress}%`,
    height: "100%",
    backgroundColor: "#2d3436",
    borderRadius: "10px",
    transition: "width 0.5s ease-in-out",
  };

  return (
    <>
      <div ref={ref} style={mainContainerStyle}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "900",
            color: "#2d3436",
            textAlign: "center",
          }}
        >
          <span style={{ color: "red" }}>#</span>Fact Check
        </h2>
        <p
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            fontWeight: 600,
            fontSize: "14px",
            color:"black"
          }}
        >
          Make use of highly efficient <span style={{ color: "red" }}>AI</span>{" "}
          models to analyze your data!
        </p>

        <div style={tabContainerStyle}>
          {sections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveSection(section.key)}
              style={tabButtonStyle(activeSection === section.key)}
            >
              {section.icon} {section.label}
            </button>
          ))}
        </div>

        <div style={contentWrapperStyle}>
          {renderInputField()}
          <div style={{ marginTop: "2rem", textAlign: "right" }}>
            <button
              style={{
                width: "100%",
                padding: "0.75rem 1.5rem",
                fontSize: "1rem",
                fontWeight: "600",
                backgroundColor: "#2d3436",
                color: "#ffffff",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
              }}
              onClick={handleAnalyze}
              disabled={loading}
            >
              {loading ? (
                <ClipLoader color="#fff" size={25} />
              ) : (
                "Analyze Content"
              )}
            </button>
          </div>
        </div>
      </div>

      {loading && (
        <div style={loadingContainerStyle}>
          <p
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <ClipLoader size={50} color="#2d3436" />
            {loadingText} <span style={{ color: "#7f8c8d" }}>{progress}%</span>
          </p>
          <div style={progressBarOuter}>
            <div style={progressBarInner}></div>
          </div>
        </div>
      )}


{!loading && fakeNewResult && (
  <div
    style={mainContainerStyle}
    //   // maxWidth: "80%",
    //   // margin: "2rem auto",
    //   // padding: "1.5rem",
    //   // border: "1px solid #d1d9e6",
    //   // borderRadius: "16px",
    //   // backgroundColor: "#ffffff",
    //   // boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
    //   // fontFamily: "'Segoe UI', sans-serif",
    // }
  >
    <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#2d3436",textAlign:"center" }}>
    <LuBrainCircuit /> Analysis Result
    </h3>



    {!loading && textResult && textResult.aiDetection && fakeNewResult && (
  <div
    style={{
      position: "relative",
      margin: "3rem auto",
      padding: "2rem",
      maxWidth: "960px",
      border: "1px solid #e0e6ed",
      borderRadius: "20px",
      backgroundColor: "#ffffff",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
      fontFamily: "'Segoe UI', 'Roboto', sans-serif",
      transition: "all 0.3s ease-in-out",
    }}
  >
    {/* Badge */}
    <div
      style={{
        position: "absolute",
        top: "1.5rem",
        right: "1.5rem",
        padding: "0.5rem 1rem",
        borderRadius: "10px",
        fontSize: "0.85rem",
        fontWeight: "bold",
        letterSpacing: "0.5px",
        color: "#fff",
        backgroundColor: fakeNewResult.label === "Fake News" ? "#e74c3c" : "#2ecc71",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {fakeNewResult.label === "Fake News" ? "Not Verified" : "Verified"}
    </div>

    {/* Title */}
    <h2
      style={{
        fontSize: "1.8rem",
        marginBottom: "2rem",
        color: "#2f3542",
        borderBottom: "2px solid #f1f2f6",
        paddingBottom: "0.75rem",
      }}
    >
       Analysis Overview
    </h2>

    {/* Grid */}
    <div
      style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {/* AI Detection */}
      <div
        style={{
          flex: "1 1 48%",
          backgroundColor: "#f9fbfd",
          border: "1px solid #dfe6ec",
          borderRadius: "14px",
          padding: "1.5rem",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
        }}
      >
        <h4
          style={{
            fontSize: "1.2rem",
            marginBottom: "1rem",
            color: "#34495e",
            borderBottom: "1px solid #e3e6f0",
            paddingBottom: "0.5rem",
          }}
        >
           AI Detection
        </h4>
        <p style={{ marginBottom: "0.75rem", fontSize: "0.95rem" }}>
          <strong>Detected As:</strong>{" "}
          <span style={{ color: "#0984e3", fontWeight: 600 }}>
            {textResult.aiDetection}
          </span>
        </p>
        <p style={{ fontSize: "0.95rem" }}>
          <strong>Certainty:</strong>{" "}
          <span style={{ color: "#636e72" }}>{textResult.certainty}</span>
        </p>
      </div>

      {/* Fake News Detection */}
      <div
        style={{
          flex: "1 1 48%",
          backgroundColor: "#fefefe",
          border: "1px solid #dfe6ec",
          borderRadius: "14px",
          padding: "1.5rem",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
        }}
      >
        <h4
          style={{
            fontSize: "1.2rem",
            marginBottom: "1rem",
            color: "#34495e",
            borderBottom: "1px solid #e3e6f0",
            paddingBottom: "0.5rem",
          }}
        >
           Fake News Detection
        </h4>
        <p style={{ marginBottom: "0.75rem", fontSize: "0.95rem" }}>
          <strong>Detected As:</strong>{" "}
          <span
            style={{
              color: fakeNewResult.label === "Fake News" ? "#c0392b" : "#27ae60",
              fontWeight: "bold",
            }}
          >
            {fakeNewResult.label}
          </span>
        </p>
        <p style={{ marginBottom: "0.5rem", fontSize: "0.95rem" }}>
          <strong>Confidence:</strong> {fakeNewResult.confidence}
        </p>
        <p style={{ marginBottom: "0.5rem", fontSize: "0.95rem" }}>
          <strong>Confidence Level:</strong> {fakeNewResult.confidence_level}
        </p>
        <p style={{ fontSize: "0.95rem" }}>
          <strong>Topic:</strong> {fakeNewResult.topic_classification}
        </p>
      </div>
    </div>
  </div>
)}





{/* Summary Section */}
<div style={{ marginBottom: "2rem" }}>
  <h4
    style={{
      margin: "0 0 0.75rem",
      fontSize: "1.1rem",
      color: "#2f3542",
      borderBottom: "1px solid #e0e0e0",
      paddingBottom: "0.5rem",
    }}
  >
    📝 Summary
  </h4>
  <div
    style={{
      backgroundColor: "#f1f2f6",
      padding: "1rem 1.25rem",
      borderRadius: "10px",
      fontSize: "0.95rem",
      lineHeight: "1.6",
      color: "#2d3436",
      boxShadow: "inset 0 1px 4px rgba(0, 0, 0, 0.05)",
    }}
  >
    {fakeNewResult.summary}
  </div>
</div>

{/* Sources Section */}
<div>
  <h4
    style={{
      margin: "0 0 0.75rem",
      fontSize: "1.1rem",
      color: "#2f3542",
      borderBottom: "1px solid #e0e0e0",
      paddingBottom: "0.5rem",
      cursor:"pointer"
    }}
  >
    🔗 Sources
  </h4>
  <div
    style={{
      backgroundColor: "#f9f9fa",
      borderRadius: "10px",
      padding: "1rem 1.25rem",
      maxHeight: "220px",
      overflowY: "auto",
      fontSize: "0.9rem",
      lineHeight: "1.5",
      color: "#34495e",
      whiteSpace: "pre-wrap",
      boxShadow: "inset 0 1px 4px rgba(0, 0, 0, 0.05)",
      border: "1px solid #e3e6ed",
    }}
  >
    {fakeNewResult.sources}
  </div>
</div>

  </div>
)}

    </>
  );
});

export default MainSection;
