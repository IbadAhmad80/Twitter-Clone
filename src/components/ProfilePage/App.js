import React, { useState } from "react";
import UserProfile from "./UserCred";
import Profile from "./Profile";
import "../../styles/index.css";

function ProfileApp() {
  return (
    <div>
      <UserProfile />
      <Profile />
    </div>
  );
}

export default ProfileApp;