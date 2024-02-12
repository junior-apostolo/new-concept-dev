"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { Languages, Globe } from "lucide-react";
type Checked = DropdownMenuCheckboxItemProps["checked"];
import { Link, usePathname, useRouter } from "@/navigation";

export function SwitchLanguage() {
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
  const [showPanel, setShowPanel] = useState<Checked>(false);

  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Globe className="navbarLi" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="md:w-auto lg:w-40">
        <DropdownMenuLabel>Idiomas</DropdownMenuLabel>
        <DropdownMenuItem>
          <Link href={pathname} locale="en-US">
            English
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={pathname} locale="pt-BR">
            Portuguese
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
