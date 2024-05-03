import React from "react";
import LogoutButton from "../auth/_components/LogoutButton";
import Logo from "@/components/logo";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="flex items-center justify-between p-8">
        <Logo />
        <LogoutButton />
      </nav>
      <div className="flex flex-col items-center p-24">
        <h2>DashboardPage</h2>
      </div>
    </div>
  );
}
