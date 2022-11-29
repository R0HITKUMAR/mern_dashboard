import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import Modal from "../common/Modal";

export default function Admin(props) {
  const [global, setGlobal] = React.useState({
    doc: "",
  });
  const hideSidebar = () => {
    document.querySelector("html").classList.remove("layout-menu-expanded");
  };

  return (
    <>
      {global.doc && <Modal global={global} setGlobal={setGlobal} />}
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar hideSidebar={hideSidebar} logout={props.logout} />
          <div className="layout-page">
            <Navbar logout={props.logout} />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <Routes>
                  <Route path="/*" element={<Home />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={hideSidebar}
          className="layout-overlay layout-menu-toggle"
        ></div>
      </div>
    </>
  );
}
