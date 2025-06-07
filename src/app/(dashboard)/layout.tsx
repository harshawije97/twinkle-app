import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/(dashboard)/components/app-sidebar";
import { cookies } from "next/headers";

interface DashboardLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

async function DashboardLayout({ children }: DashboardLayoutProps) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <div className="w-full h-full">
        <SidebarTrigger className="px-2 rounded-full hover:bg-purple-100 flex w-max justify-center items-center ml-2 mt-2" />
        {children}
      </div>
    </SidebarProvider>
  );
}

export default DashboardLayout;
