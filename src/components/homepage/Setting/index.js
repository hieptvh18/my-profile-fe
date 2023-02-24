import "./style.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faGears, faMoon } from "@fortawesome/free-solid-svg-icons";

const Settings = (props) => {
  // handle click show content setting
  const [isContentSettingActive, setContentSettingActive] = useState(false);
  useEffect(() => {
    const settingBtn = document.querySelector(".settings-icon");
    const settingContent = document.querySelector(".setting-content");
  },[]);

  const handleShowSetting = (e) => {
    setContentSettingActive(!isContentSettingActive);
  };

  return (
    <div className={isContentSettingActive ? "settings active" : "settings"}>
      <FontAwesomeIcon
        onClick={handleShowSetting}
        className="settings-icon"
        icon={faGears}
        color="#fff"
      />
      <div className="setting-content">
        <div className="theme-mode">
          <div className="theme-mode__title">Change Mode</div>
          {/* <FontAwesomeIcon icon={faMoon} fontSize={"40px"} color="#fff" /> */}
        </div>
        <div className="change-language">
          <div className="theme-mode__title">Language</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
