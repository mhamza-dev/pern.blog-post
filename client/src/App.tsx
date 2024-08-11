import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <Fragment>
      <div className="flex flex-col min-h-[100dvh]">
        <Navbar />
        <div className="p-1 flex">
          <SideBar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
