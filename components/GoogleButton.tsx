"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "./ui/button";

const GoogleButton = () => {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      variant="outline"
      className="w-full"
    >
      <FcGoogle className="mr-3 text-xl" /> Continue with Google
    </Button>
  );
};

export default GoogleButton;
