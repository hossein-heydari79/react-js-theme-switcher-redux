import React from "react";
import { Helmet } from "react-helmet";
import NameBox from "./components/NameBox";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { THEME_TYPE } from "./constants";
import Styles from "./data/Styles";
import { useSelector, useDispatch } from "react-redux";

// No need to change *return* part in both StyleTag and App components
// You have to set themeMode based on redux state

const StyleTag = () => {

  const state = useSelector(state => state)
  const dispatch = useDispatch();

  const themeMode = THEME_TYPE.LIGHT;
  return (
    <Helmet>
      <style>{Styles(!state ? themeMode : "DARK")}</style>
    </Helmet>
  );
};

function App() {
  return (
    <>
      <StyleTag />
      <NameBox />
      <ThemeSwitcher />
    </>
  );
}

export default App;
