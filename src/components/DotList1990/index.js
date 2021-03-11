import React from "react";
import "../../pages/Home/styles.css";

const DotList1990 = (props) => {
  return (
    <>
      <a href="#first-screen" className="dot" style={{ marginTop: "0px", marginLeft: "-2px" }} />
      <a href="#second-screen" className="dot" style={{ marginTop: "35px", marginLeft: "-11px" }} />
      <span className="dot" style={{ marginTop: "101px", marginLeft: "-11px",  backgroundColor: props.backgroundColor }} />
      <a href="#third-screen" className="dot" style={{ marginTop: "68px", marginLeft: "-11px" }} />
      <a href="#fifth-screen" className="dot" style={{ marginTop: "135px", marginLeft: "-11px" }} />
      <a href="#sixth-screen" className="dot" style={{ marginTop: "168px", marginLeft: "-11px" }} />
      <a href="#seventh-screen" className="dot" style={{ marginTop: "200px", marginLeft: "-11px" }} />
    </>
  );
};

export default DotList1990;
