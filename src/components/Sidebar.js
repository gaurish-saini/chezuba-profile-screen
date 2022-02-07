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
      <div>
        <div className="bg-white rounded-12 border border-dark border-2 mt-4">
          <div className="d-flex flex-row">
            <div className="d-flex flex-column">
              <div className="">
                <text>Hello,</text>
                <text>Sukhendra Rompally</text>
              </div>
              <div class="bar-container rounded-2 my-2">
                <div class="hour-bar rounded-2"></div>
              </div>
              <div className="d-flex flex-column"></div>
              <div className=""></div>
            </div>
            <div>
              <img alt="avatar" src={avatarLarge} />
              <div>View/Edit Profile Pic</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
