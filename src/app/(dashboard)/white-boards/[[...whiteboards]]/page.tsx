/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

function WhiteboardsPage({ props }: any) {
  console.log(props);
  return <div className="w-full min-h-screen lg:px-16 px-8">
    <div className="container mx-auto">
      <div className="w-full h-full flex flex-col px-6">
        <h2 className="text-2xl font-semibold">Team Boards</h2>
      </div>
    </div>
  </div>;
}

export default WhiteboardsPage;
