import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export default function Social() {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        variant="secondary"
        size="lg"
        className="w-full"
        onClick={() => {}}
      >
        <FcGoogle size={24} />
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="w-full"
        onClick={() => {}}
      >
        <FaGithub size={24} />
      </Button>
    </div>
  );
}
