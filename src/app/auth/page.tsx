import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import SignForm from "./_components/SignForm";
import { SigninWithGithub } from "./_components/SigninWithGithub";

export default async function AuthRoute() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div className="w-full m-auto min-h-screen">
      <Card className="mx-auto gap-y-8 max-w-md border-none shadow-none p-8">
        <CardHeader className="items-center space-y-5">
          <CardTitle className="text-xl text-center">
            Sign up to continue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <SignForm />

            <SigninWithGithub />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
