import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router";
import Breadcrump from "../Components/Breadcrump/Breadcrump";
import HomeWallat from "../Components/Home/HomeWallat";
import HomeWork from "../Components/Home/HomeWork";

export default function Home({ width }) {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  });
  return (
    <div>
      <Breadcrump width={width} data={"UI/UX > Refer & Earn "} />
      <div style={{ height: width > 700 ? "10vw" : "40vw" }}></div>
      <HomeWallat width={width} />
      <HomeWork width={width} />
      <div
        style={{
          justifyContent: "flex-start",
          marginTop: "1vw",
          alignItems: "flex-start",
          display: "block",
          textAlign: "left",
          paddingTop: width > 700 ? "1vw " : "3vw",
          marginBottom: width > 700 ? "2vw" : "4vw",
        }}
        className="breadcrump-container"
      >
        <div onClick={() => navigate("/refer")} className="nameenroolsfooter">
          Friends Who Enrolled
        </div>
        <div className="nameenroolsfooter">Terms & Conditions</div>
      </div>
    </div>
  );
}