import React from "react";
import img from "../../../../assets/img/icons/dp_avtar.png";

export default function B(props) {
  return (
    <div className="col-lg-6 col-md-12 col-6 mb-4">
      <div className="card text-center">
        <div className="card-body">
          <div className="card-title d-flex align-items-start justify-content-center">
            <div className="avatar flex-shrink-0">
              <img src={img} alt="-" className="rounded" />
            </div>
          </div>
          <span className="fw-semibold d-block mb-1">Registered Voters</span>
          <h3 className="card-title mb-2">A</h3>
        </div>
      </div>
    </div>
  );
}
