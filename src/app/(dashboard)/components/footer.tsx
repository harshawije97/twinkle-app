"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenuSubButton } from "@/components/ui/sidebar";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import { Authenticated } from "convex/react";
import { ChevronUp } from "lucide-react";
import React from "react";

function Footer() {
  const [fullName, setFullName] = React.useState<string>("Default User");
  const { isSignedIn, user, isLoaded } = useUser();

  React.useEffect(() => {
    if (isSignedIn && isLoaded) {
      setFullName(user.fullName!);
    }
  }, [isLoaded, isSignedIn, user]);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuSubButton>
            <Authenticated>
              <UserButton />
              <p>{fullName}</p>
            </Authenticated>
            <ChevronUp className="ml-auto" />
          </SidebarMenuSubButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top" className="min-w-[220px]">
          <DropdownMenuItem>
            <span>Account</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignOutButton>Sign out</SignOutButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default Footer;
