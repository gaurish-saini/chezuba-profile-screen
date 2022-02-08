import React from "react";
import avatarSmall from "../Avatars Default with Backdrop S.png";
import avatarLarge from "../Avatars Default with Backdrop L.png";
import logo from "../chezuba logo.png";
import { Button } from "react-bootstrap";

function Sidebar() {
  return (
    <div className="d-flex flex-row border-start border-light border-2 p-0">
      <div className="d-flex flex-column">
        <div className="">
          <img alt="logo" src={logo} />
        </div>
        <div className="d-flex flex-column">
          <img alt="avatar" src={avatarSmall} />
          <div>Sukhendra Rompally</div>
        </div>
        <div className="">
          <ul>
            <li>Home</li>
            <li>Calender</li>
            <li>Projects</li>
            <li>My Applications</li>
            <li>Extras</li>
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="bg-white rounded-12 border border-dark border-2 mt-4">
          <div className="d-flex flex-row">
            <div className="d-flex flex-column">
              <div className="">
                <text>Hello,</text>
                <text>Sukhendra Rompally</text>
              </div>
              <div className="d-flex flex-row">
                <div class="bar-container rounded-2 my-2">
                  <div class="hour-bar rounded-2"></div>
                </div>
                <div>0% Profile Completed</div>
              </div>
              <text>Next Step: Enter your Employee ID</text>
              <div className="d-flex flex-column"></div>
              <div className="mx-auto mt-3">
                <Button className="theme-saffron-mango fz-12 w-80 rounded-12">
                  Complete my Profile
                </Button>
              </div>
            </div>
            <div className="d-flex flex-column">
              <img alt="avatar" src={avatarLarge} />
              <div>View/Edit Profile Pic</div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div>
            <div className="bg-white rounded-12 border border-dark border-2 mt-4">
              <text>Basic Info</text>
              <div className="d-flex flex-row">
                <div className="d-flex flex-column">
                  <text>E-Mail</text>
                  <text>-</text>
                  <text>Employee Id</text>
                  <text>-</text>
                  <text>Full Name</text>
                  <text>-</text>
                  <text>Phone</text>
                  <text>-</text>
                  <text>Division</text>
                  <text>-</text>
                </div>
                <div className="d-flex flex-column">
                  <text>Skills</text>
                  <text>-</text>
                  <text>Causes</text>
                  <text>-</text>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-12 border border-dark border-2 mt-4">
              <text>Profile Status - 0%</text>
              <div className="bg-white rounded-12 border border-dark border-2 mt-4">
                <div className="d-flex flex-row">
                  <div className="d-flex flex-column">
                    <text>Employee Id</text>
                    <text>Business Unit</text>
                    <text>Skills</text>
                  </div>
                  <text>Bronze Profile</text>
                </div>
              </div>
              <div className="bg-white rounded-12 border border-dark border-2 mt-4">
                <div className="d-flex flex-row">
                  <div className="d-flex flex-column">
                    <text>Causes</text>
                    <text>How to volunteer</text>
                    <text>Profile Picture</text>
                    <text>1 activity application</text>
                  </div>
                  <text>Silver Profile</text>
                </div>
              </div>
              <div className="bg-white rounded-12 border border-dark border-2 mt-4">
                <div className="d-flex flex-row">
                  <div className="d-flex flex-column">
                    <text>1 activity completed</text>
                    <text>1 chezuba project</text>
                  </div>
                  <text>Gold Profile</text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
