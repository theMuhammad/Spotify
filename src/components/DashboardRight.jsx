import React from "react";
import "../scss/DashboardRight.scss";
import { add, close, user } from "../assets/imgs";

function DashboardRight() {
  return (
    <div className="dashboard_right">
      <div className="friend_add">
        <div className="friend_add_t">
          <h4>Friend Activity</h4>
          <div className="icons">
            <img className="add" src={add} alt="" />
            <img className="close" src={close} alt="" />
          </div>
        </div>
      </div>
      <div className="lorem">
        <p>
          Let friends and followers on Spotify see what you’re listening to.
        </p>
      </div>
      <div className="user_loading">
        <img src={user} alt="user" />
        <img src={user} alt="user" />
        <img src={user} alt="user" />
      </div>
      <div className="lorem">
        <p>
          Go to Settings Social and enable “Share my listening activity on
          Spotify.’ You can turn this off at any time.
        </p>
      </div>
      <button className="setting">Settings</button>
    </div>
  );
}

export default DashboardRight;
