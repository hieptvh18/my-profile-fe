import "./style.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faGears, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Settings = (props) => {
  // handle click show content setting
  const [isContentSettingActive, setContentSettingActive] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);
  
  const handleShowSetting = (e) => {
    setContentSettingActive(!isContentSettingActive);
  };

  const handleMode = (e)=>{
    setDarkMode(!isDarkMode);
  }

  return (
    <div className={isContentSettingActive ? "settings active" : "settings"}>
      <div className="settings-left">
        <div className="settings-left__icon-settings">
          <FontAwesomeIcon
            onClick={handleShowSetting}
            className="settings-icon"
            icon={faGears}
            color="#fff"
          />
        </div>
        <div 
         onClick={handleMode}
        className={isDarkMode ? 'setting-left__mode dark' : 'setting-left__mode light'}>
          <FontAwesomeIcon
            className="mode-icon"
            icon={isDarkMode ? faMoon : faSun}
            color="#fff"
          />
        </div>
      </div>
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
