import React from "react";
import "./HomeWallet.css";
export default function HomeWallat({ width }) {
  return (
    <div
      style={{
        justifyContent: "flex-start",
        marginTop: "1vw",
        alignItems: "flex-start",
        flexDirection: width > 700 ? "" : "column",
      }}
      className="breadcrump-container"
    >
      {width > 700 ? (
        <div className="wallatBox wallatBox1">
          <div className="wallatmoneytypebox">
            <div className="wallatmoneytype">
              <div>Referral Earning</div>
              <div className="wallatmoneytypevalue">₹ 2,500</div>
            </div>
            <div className="wallatmoneytype">
              <div>Total Referrals</div>
              <div className="wallatmoneytypevalue">7</div>
            </div>
            <div className="wallatmoneytype">
              <div>Wallet Balance</div>
              <div className="wallatmoneytypevalue">₹ 500</div>
            </div>
          </div>
          <div className="withdrawbutton">Withdraw Balance</div>
        </div>
      ) : (
        <div className="wallatBox wallatBox1">
          <div className="wallatmoneytypebox">
            <div className="wallatmoneytype">
              <div>Referral Earning</div>
              <div className="wallatmoneytypevalue">₹ 2,500</div>
            </div>
            <div className="wallatmoneytype">
              <div>Total Referrals</div>
              <div className="wallatmoneytypevalue">7</div>
            </div>
            <div className="wallatmoneytype">
              <div>Wallet Balance</div>
              <div className="wallatmoneytypevalue">₹ 500</div>
            </div>
            <div className="withdrawbutton">Withdraw Balance</div>
          </div>
        </div>
      )}
      <div className="wallatBox wallatBox2">
        <div className="wallwtreffer">Your Referral Code </div>

        <div className="reffercodebox">EDCH54</div>
      </div>
    </div>
  );
}