import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addLogout } from "../../data/actions";
import { Button, LoginPannel } from "../../components";
import { MENU_LANG, BTN_MENU_LNG } from "../../assets/languages";
import styles from "./menu.module.scss";

const Menu = () => {
  const sessionStorege = useSelector((store) => store.sessionStorege);
  const cookie = useSelector((store) => store.cookie[0].isCookie);
  const localStorage = useSelector(
    (store) => store.localStorage[0].storageData
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginPannelOpen, setIsLoginPannelOpen] = useState(false);

  const handeOpenCloseMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginLogOut = (e) => {
    setIsMenuOpen(false);
    if (e.target.id === "login") {
      setIsLoginPannelOpen(true);
    } else {
      dispatch(addLogout());
    }
  };

  const handleOnClickElement = (e) => {
    setIsMenuOpen(false);
    if (e.target.id === "start") {
      navigate("/");
    } else if (e.target.id === "haveTransport") {
      navigate("/have-transport");
    } else if (e.target.id === "needTransport") {
      navigate("/need-transport");
    } else if (e.target.id === "account") {
      navigate("/user");
    } else if (e.target.id === "contact") {
      navigate("/contact");
    }
  };

  const menuList = MENU_LANG.map((item) => {
    return (
      <div
        key={item.id}
        style={{
          display: `${
            item.id === "account" && !cookie && !localStorage ? "none" : "flex"
          }`,
        }}
        id={item.id}
        onClick={handleOnClickElement}
      >
        {item.svg}
        <p id={item.id}>{sessionStorege === "PL" ? item.pl : item.ua}</p>
      </div>
    );
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.inside}>
        <div className={styles.menuDesktop}>
          <ul>{menuList}</ul>
        </div>
        <div className={styles.login}>
          <Button
            name={
              !cookie && !localStorage
                ? sessionStorege === "PL"
                  ? BTN_MENU_LNG.pl
                  : BTN_MENU_LNG.ua
                : sessionStorege === "PL"
                ? BTN_MENU_LNG.pl1
                : BTN_MENU_LNG.ua1
            }
            id={!cookie && !localStorage ? "login" : "logout"}
            onClick={handleLoginLogOut}
          />
        </div>
        <div className={styles.burger} onClick={handeOpenCloseMenu}>
          <svg
            style={{
              transform: `${!isMenuOpen ? "none" : "rotate(180deg)"}`,
            }}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z" />
          </svg>
        </div>
        <div
          className={styles.menuMobile}
          style={{ display: `${isMenuOpen ? "flex" : "none"}` }}
        >
          <ul>{menuList}</ul>
        </div>
      </div>
      <LoginPannel
        isLoginPannelOpen={isLoginPannelOpen}
        setIsLoginPannelOpen={setIsLoginPannelOpen}
      />
    </div>
  );
};

export default Menu;
