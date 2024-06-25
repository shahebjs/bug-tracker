"use client";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { IoBug } from "react-icons/io5";

const Navbar = () => {
  const { status, data } = useSession();
  return (
    <nav className="max-w-screen-xl mx-auto h-16 flex items-center justify-between px-4">
      <div className="flex items-center gap-7">
        <ul className="flex items-center gap-7">
          <Link className="text-3xl" href="/">
            <IoBug />
          </Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/bugs">Bugs</Link>
        </ul>
      </div>
      {status === "unauthenticated" && (
        <ul className="flex items-center gap-7">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link className={buttonVariants()} href="/login">
              Sign Up
            </Link>
          </li>
        </ul>
      )}
      {status === "authenticated" && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={data.user?.image!} />
              <AvatarFallback> {data.user?.name?.slice(0, 1)} </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{data.user?.name}</DropdownMenuLabel>
            <DropdownMenuLabel>{data.user?.email}</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="cursor-pointer"
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </nav>
  );
};

export default Navbar;
