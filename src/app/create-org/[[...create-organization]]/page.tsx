import { CreateOrganization } from "@clerk/nextjs";
import React from "react";

function CreateOrganizationPage() {
  return (
    <div className="w-full h-screen">
      <div className="container mx-auto">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <section className="pt-10">
            <CreateOrganization afterCreateOrganizationUrl={"/white-boards?org=:id"}/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CreateOrganizationPage;
