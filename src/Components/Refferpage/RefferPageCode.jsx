import React from "react";
import "./Reffer.css";
export default function RefferPageCode({width}) {
  return (
    <div
      style={{
        marginTop: "0vw",
        alignItems: "flex-start",
        justifyContent:"space-between"
      }}
      className="breadcrump-container"
    >
      <div className="RefferCodebox">
        <div style={{fontSize: width>700?"1.35vw":"4vw", width: width>700?"":"100%",height:width>700?"":"8vw"}} className="wallatmoneytype">Your Referral Code </div>
        <div className="wallatmoneycodedta">EDCH54</div>
      </div>
      <div className="Refferwallwtbox">
        <div style={{width: width>700?"":"100%",height:width>700?"":"7vw"}} className="wallatmoneytype">Wallet Balance</div>
        <div style={{fontSize: width>700?"1.7vw":"5vw",lineHeight: width>700?"2.5vw":"7vw"}} className="wallatmoneytypevalue">₹ 500</div>
      </div>
    </div>
  );
}