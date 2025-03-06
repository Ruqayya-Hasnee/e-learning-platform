import React from "react";

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 px-8">
      <h1 className="text-2xl text-center py-6">Student Profile</h1>
      <div className="flex text-center gap-8">
        {/* left div */}
        <div className="flex flex-col justify-center bg-white w-1/3 h-auto py-8 shadow-sm">
          <div className="flex justify-center pb-6">
            <img
              src="/landing-page.avif"
              alt="page image"
              className="rounded-full w-32 h-32 border"
            />
          </div>
          <h1 className="text-2xl p-1">Ruqayya</h1>
          <p className="p-2">bc210406706</p>
          <p>bc210406706@vu.edu.com</p>
        </div>

        {/* right div */}
        <div className="bg-white w-2/3 h-auto shadow-sm">
          <h1 className="text-2xl bg-gray-200">Personal Information</h1>
          <div className="flex justify-evenly">
            <div className="flex flex-col">
              <span className="p-12">Name</span>
              <span className="p-12">CNIC</span>
              <span className="p-12">Birth Date</span>
              <span className="p-12">Address</span>
            </div>
            <div className="flex flex-col">
              <span className="p-12">Ruqayya</span>
              <span className="p-12">6767-6767-76</span>
              <span className="p-12">3/5/2003</span>
              <span className="p-12">City Name</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
