import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";

function Layout() {
  return (
    <>
      <div className="bg-[url('/landing-page.avif')] bg-cover bg-no-repeat max-w-full mx-auto h-screen">
        <Navbar />
        <Main />
      </div>
    </>
  );
}

export default Layout;
