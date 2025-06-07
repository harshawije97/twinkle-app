"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { ChevronDown, Plus } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

function WorkspaceHandler() {
  const params = useSearchParams();
  const organization = params.get("org");

  console.log(organization);
  
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton>
            <Image
              alt="logo"
              src={"/twinkle-logo.svg"}
              width={100}
              height={100}
              className="object-contain w-[30px] h-[30px]"
            />
            <span className="font-semibold text-purple-600">Twinkle</span>
            <ChevronDown className="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[220px] space-y-3">
          <DropdownMenuItem>
            <span>Acme Inc</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-transparent">
            <a
              href="/create-org"
              className="p-2 border border-dashed border-violet-500 rounded-md w-full flex justify-between items-center"
            >
              Add organization <Plus />
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default WorkspaceHandler;
