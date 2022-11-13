import React, {useLayoutEffect } from "react";
import Breadcrump from "../Components/Breadcrump/Breadcrump";
import RefferEnroll from "../Components/Refferpage/RefferEnroll";
import RefferPageCode from "../Components/Refferpage/RefferPageCode";
import img from "../Assets/Arrow 17.svg";
import { useNavigate } from "react-router";
export default function ReferPage({ width }) {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  });
  return (
    <div>
      <Breadcrump
        data={"UI/UX > Refer & Earn > Friends Referred "}
        width={width}
      />
      <div style={{ height: width > 700 ? "10vw" : "40vw" }}></div>
      {width <= 700 && (
        <div
          style={{
            justifyContent: "flex-start",
            marginTop: "1vw",
            alignItems: "center",

            textAlign: "left",
            paddingTop: width > 700 ? "1vw " : "0vw",
            marginBottom: width > 700 ? "2vw" : "0vw",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate(-1);
          }}
          className="breadcrump-container"
        >
          <img
            style={{
              fontSize: "4vw",
              width: "4vw",
              objectFit: "contain",
              marginRight: "2vw",
              position: "relative",
              bottom: "0.51vw",
            }}
            src={img}
            alt=""
          />
          <div className="nameenroolsfooter">go back</div>
        </div>
      )}
      <RefferPageCode width={width} />
      <RefferEnroll width={width} />
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
        <div className="nameenroolsfooter">Terms & Conditions</div>
      </div>
    </div>
  );
}