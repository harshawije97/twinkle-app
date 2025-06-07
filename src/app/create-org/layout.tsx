import React from "react";

interface OrganizationLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

function OrganizationLayout({ children }: OrganizationLayoutProps) {
  return <div>{children}</div>;
}

export default OrganizationLayout;
