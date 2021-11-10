import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { THEME_TYPE } from "../constants";
import { setTheme } from "../store/actions";

const ThemeSwitcher = () => {
  // No need to change *return* part
  // You have to set themeMode based on redux state

  const state = useSelector(state => state)
  const dispatch = useDispatch();

  const themeMode = THEME_TYPE.LIGHT;

  const handleThemeChange = (e) => {
    dispatch(setTheme(e.target.checked));
    // console.log(e.target.checked)
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          // checked={themeMode === THEME_TYPE.DARK}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;
