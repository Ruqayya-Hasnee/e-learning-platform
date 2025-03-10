import React from "react";
import Dashboard from "./Dashboard";

function Layout() {
  return (
    <>
      <div className="bg-[url('/landing-page.avif')] bg-cover bg-no-repeat min-h-screen overflow-hidden ">
        <Dashboard />
      </div>
    </>
  );
}

export default Layout;
