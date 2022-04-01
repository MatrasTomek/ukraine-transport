import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { StartViev } from "../../templates";

const MainSwitch = () => {
  const cookie = useSelector((store) => store.cookie[0]);
  const user = useSelector((store) => store.user);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<StartViev />} />

        {/* {user.length || cookie.isCookie ? (
          <Route
            exact
            path="/account-options"
            render={() => <AccountOption />}
          />
        ) : (
          ""
        )} */}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
export default MainSwitch;
