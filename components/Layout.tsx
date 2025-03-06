import React from "react";
import Main from "./Main";

function Layout() {
  return (
    <>
      <div className="bg-[url('/landing-page.avif')] bg-cover bg-no-repeat min-h-screen overflow-hidden ">
        <Main />
      </div>
    </>
  );
}

export default Layout;
