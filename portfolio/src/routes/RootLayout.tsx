import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useLocation } from "react-router-dom";

const RootLayout = () => {
  const location = useLocation();

  const hideMenuOnPaths = ["/"];
  const shouldHideMenu = hideMenuOnPaths.includes(location.pathname);

  return (
    <>
       {!shouldHideMenu && <MainNavigation />}
      <Outlet />
    </>
  );
};

export default RootLayout;
