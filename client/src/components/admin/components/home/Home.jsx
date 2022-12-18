import React from "react";
import Welcome from "./Welcome";
import A from "../stats/A";
import B from "../stats/A";

export default function Home() {
  return (
    <div className="row">
      <div className="col-lg-8 col-md-8 col-12">
        <Welcome />
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="row">
          <A />
          <B />
        </div>
      </div>
    </div>
  );
}
