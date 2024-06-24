import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      {/* Outlet allows nested UI to show up when child routes are rendered. */}
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}
export default MainLayout;
