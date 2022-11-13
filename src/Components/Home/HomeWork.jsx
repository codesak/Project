import React from "react";
import img1 from "../../Assets/Vector.svg";
import img2 from "../../Assets/₹.svg";
import img3 from "../../Assets/Vector (2).svg";
import img4 from "../../Assets/Vector (3).svg";
import img5 from "../../Assets/Vector (4).svg";

export default function HomeWork({width}) {
  return (
    <div
      style={{
        justifyContent: "flex-start",
        marginTop: "0vw",
        alignItems: "flex-start",
        display: "block",
        textAlign: "left",
       
        
      }}
      className="breadcrump-container"
    >
      <div className="homwworkheading">How does it work ?</div>

      <div className="homeworktypebox">
        <div className="homeworktype">
          <div className="homeworktuypeimg">
            <img src={img1} alt="" />
          </div>
          <div style={{ width: width>700? "22vw":"70vw" }}>
            <div className="homeworktitilw">Invite your Friends</div>
            <div className="homeworktitilwdesc">Share the link tutedude.com with your friends</div>
          </div>
        </div>
        <div className="homeworktype">
          <div className="homeworktuypeimg">
            <img src={img4} alt="" />
          </div>
          <div style={{ width: width>700? "22vw":"70vw" }}>
            <div className="homeworktitilw">
             Friend purchases any course
            </div>
            <div className="homeworktitilwdesc"> Using your REFERRAL CODE in the payments page</div>
          </div>
        </div>
        <div className="homeworktype">
          <div className="homeworktuypeimg">
            <img src={img2} alt="" />
          </div>
          <div style={{width: width>700? "22vw":"70vw" }}>
            <div className="homeworktitilw"> You get ₹ 200 as referral money</div>
            <div className="homeworktitilwdesc">
               On total purchase the friend makes, into your wallet
            </div>
          </div>
        </div>
        <div className="homeworktype">
          <div className="homeworktuypeimg">
            <img src={img5} alt="" />
          </div>
          <div style={{ width: width>700? "22vw":"70vw" }}>
          <div className="homeworktitilw">Your Friend gets ₹ 200 Off </div>
            <div className="homeworktitilwdesc">
              On his overall fee on successful purchase using your referral code{" "}
            </div>
          </div>
        </div>
        <div className="homeworktype">
          <div className="homeworktuypeimg">
            <img src={img3} alt="" />
          </div>
          <div style={{ width: width>700? "22vw":"70vw" }}>
          <div className="homeworktitilw">Transfer money from wallet</div>
            <div className="homeworktitilwdesc">When the wallet balance reaches ₹200 or more, you can withdraw it</div>
            
          </div>
        </div>
      </div>
    </div>
  );
}