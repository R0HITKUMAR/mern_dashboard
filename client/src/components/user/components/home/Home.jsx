import React from "react";
import Intro from "./Intro";
import Info from "./Info";

export default function Home(props) {
  return (
    <>
      <div className="col-lg-8 mb-4">
        <Intro user={props.user} />
      </div>
      <div className="col-lg-4 mb-4">
        <Info user={props.user} />
      </div>
    </>
  );
}
