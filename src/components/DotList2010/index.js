import React from "react";
import "../../pages/Home/styles.css";

const DotList2010 = (props) => {
  return (
    <>
      <a href="#first-screen" className="dot" style={{ marginTop: "0px", marginLeft: "-2px" }} > </a>
      <a href="#second-screen" className="dot" style={{ marginTop: "35px", marginLeft: "-11px" }} > </a>
      <a href="#third-screen" className="dot" style={{ marginTop: "68px", marginLeft: "-11px" }} > </a>
      <a href="#fourth-screen" className="dot" style={{ marginTop: "101px", marginLeft: "-11px" }} > </a>
      <a href="#fifth-screen" className="dot" style={{ marginTop: "135px", marginLeft: "-11px" }} > </a>
      <span className="dot" style={{ marginTop: "168px", marginLeft: "-11px",  backgroundColor: props.backgroundColor }} />
      <a href="#seventh-screen" className="dot" style={{ marginTop: "200px", marginLeft: "-11px" }} > </a>
    </>
  );
};

export default DotList2010;
