import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./components/home/Home";
import Modal from "../common/Modal";

export default function User(props) {
  const [global, setGlobal] = React.useState({
    doc: "",
  });
  return (
    <>
      {global.doc && <Modal global={global} setGlobal={setGlobal} />}
      <div className="layout-wrapper layout-content-navbar layout-without-menu">
        <div className="layout-container">
          <div className="layout-page">
            <Navbar user={props.user} logout={props.logout} />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <Routes>
                    <Route
                      path="/*"
                      element={<Home user={props.user} setGlobal={setGlobal} />}
                    />
                    <Route path="*" element={<div>Not Found</div>} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
