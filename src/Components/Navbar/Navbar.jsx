import React from "react";
import "./Navbar.css";
import img1 from "../../Assets/logo.svg";
import img2 from "../../Assets/profile icon.svg";
import img3 from "../../Assets/Vector (1).svg";
import { useNavigate } from "react-router";
export default function Navbar({ width }) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100vw",
        background: "white",
        position: "fixed",
        zIndex: "1000",
      }}
    >
      <div className="Nav">
        <div
          onClick={() => navigate("/")}
          style={{ width: width>700? "15vw":"36vw", marginTop: "1vw" }}
        >
          <img
            style={{ width: width>700? "14vw":"35vw", objectFit: "contain" }}
            src={img1}
            alt=""
          />
        </div>
        {width > 700 ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <li>My Assignments</li>
            <li>Chat with Mentor</li>
            <img
              src={img2}
              style={{
                width: "1.5vw",
                height: "1.5vw",
                marginTop: "3px",
                marginLeft: "30px",
                marginRight: "0.5vw",
              }}
              alt=""
            />
            <li style={{ color: "rgba(128, 0, 128, 1)" }}>ProfileName</li>
            <img
              src={img3}
              style={{
                width: "1vw",
                height: "1vw",
              }}
              alt=""
            />
          </div>
        ) : (
          <div className="profilebuttonmob">
            <li style={{ color: "white" }}>ProfileName</li>
            <img
              src={img3}
              style={{
                width: "3vw",
                
                height: "3vw",
              }}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
}