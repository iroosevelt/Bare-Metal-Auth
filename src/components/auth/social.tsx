import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export default function Social() {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        variant="secondary"
        size="lg"
        className="w-full"
        onClick={() => onClick("google")}
      >
        <FcGoogle size={24} />
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="w-full"
        onClick={() => onClick("github")}
      >
        <FaGithub size={24} />
      </Button>
    </div>
  );
}
