import React, { forwardRef, useEffect, useState } from 'react';
import { FaPlusCircle, FaWhatsapp } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

const WhatsAppModal = forwardRef((props, ref) => {
  const [socket, setSocket] = useState(null);
  const [latestMessage, setLatestMessage] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3001");

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
      setSocket(socket);
    };

    socket.onmessage = (message) => {
      console.log("Received message:", message.data);
      setLatestMessage(message.data);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      console.log("Cleaning up WebSocket connection...");
      socket.close();
    };
  }, []);

  const whatsappLaunch = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/web", { method: 'GET' });
      if (!res.ok) throw new Error(`Failed to fetch QR code: ${res.statusText}`);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const mainContainerStyle = {
    padding: isMobile ? "1rem" : "2rem",
    border: "2px solid #d1d9e6",
    borderRadius: "20px",
    background: "linear-gradient(145deg, #ffffff, #f0f2f5)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    maxWidth: "90%",
    margin: "2.5rem auto",
    fontFamily: "'Segoe UI', sans-serif",
    transition: "all 0.3s ease-in-out",
  };

  // MessageCard Component - A card that displays the received message
  const MessageCard = ({ message }) => {
    let messageContent;

    // Optional: Handle specific message content like "Gemini"
    if (message.includes("Gemini")) {
      messageContent = <span style={{ color: 'blue' }}>{message}</span>;
    } else {
      messageContent = <p>{message}</p>;
    }

    return (
      <div className="message-card" style={{ border: "1px solid #ccc", padding: "15px", marginTop: "1rem", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <div className="message-header" style={{ fontWeight: "bold", marginBottom: "10px" }}>
          <strong>Received Message:</strong>
        </div>
        <div className="message-body" style={{ fontSize: "16px", color: "#333" }}>
          {messageContent}
        </div>
      </div>
    );
  };

  return (
    <div ref={ref} style={mainContainerStyle} data-aos="fade-in">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontWeight: 700, fontSize: "20px" }}>
          Fraud detection for <FaWhatsapp style={{ color: "green", fontSize: "24px", fontWeight: 900 }} /> 
          <span style={{ color: "green", fontWeight: 800 }}>WhatsApp</span>
        </p>
        <FaPlusCircle style={{ fontWeight: 600, fontSize: "28px", cursor: "pointer" }} onClick={whatsappLaunch} />
      </div>

      {/* Display the latest message inside the MessageCard */}
      {latestMessage && <MessageCard message={latestMessage} />}
    </div>
  );
});

export default WhatsAppModal;
