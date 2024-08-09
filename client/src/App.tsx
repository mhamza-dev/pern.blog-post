import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <div className="flex flex-col min-h-[100dvh]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
