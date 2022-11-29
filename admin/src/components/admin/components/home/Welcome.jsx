import React from "react";
import img from "../../../../assets/img/icon/man.png";

export default function Welcome() {
  return (
    <div className="col-12">
      <div className="card" style={{ height: "200px" }}>
        <div className="d-flex align-items-end row">
          <div className="col-sm-8">
            <div className="card-body">
              <h5 className="card-title text-primary">Welcome Admin 🎉</h5>
              <p className="mb-4">
                Hey! Admin Welome to Admin Dashboard
                <br />
                Here you can manage your details
              </p>
              <a href="javascript:;" className="btn btn-sm btn-outline-primary">
                Get Started
              </a>
            </div>
          </div>
          <div className="col-sm-4 text-center text-sm-left">
            <div className="card-body pb-0 px-0 px-md-4">
              <img src={img} height={120} alt="View Badge User" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
