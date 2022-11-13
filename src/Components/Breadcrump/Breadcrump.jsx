import React from "react";
import "./Breadcrump.css";
export default function Breadcrump({ data ,width}) {
  return (
    <div style={{ width: width>700? "100vw":"100vw", background: "white" ,position:"fixed",marginTop: width>700?"6vw":"25vw" }}>
      <div className="breadcrump-container">
        <div>{data}</div>
      </div>
    </div>
  );
}