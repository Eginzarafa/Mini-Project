import React, { useState } from "react";
import Profile from "../components/settings/profile";

const SettingPage = () => {
  const [showMenu, setShowMenu] = useState(false);

  const ShowMenu = (bol) => {
    setShowMenu(bol === true ? false : true);
  };

  return (
    <div>
      <Profile />
    </div>
  );
};

export default SettingPage;
