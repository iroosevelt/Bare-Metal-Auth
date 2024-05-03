"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

export default function SignForm() {
  const [email, setEmail] = useState<null | string>(null);

  async function SignInWithEmail() {
    const signInResult = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });

    if (!signInResult?.ok) {
      return toast({
        title: "That didn't work...",
        description: "Something went wrong, please try again",
        variant: "destructive",
      });
    }

    return toast({
      title: "Check your email",
      description: "A magic link has been sent to you",
    });
  }
  return (
    <form className="flex flex-col gap-y-4" action={SignInWithEmail}>
      <div className="gap-2">
        <Label htmlFor="first-name">First name</Label>
        <Input
          id="first-name"
          className="rounded-[12px]"
          placeholder="Max"
          required
        />
      </div>

      <div className="gap-2">
        <Label htmlFor="last-name">Last name</Label>
        <Input
          id="last-name"
          className="rounded-[12px]"
          placeholder="Robinson"
          required
        />
      </div>

      <div className="gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-[12px]"
          type="email"
          placeholder="m@example.com"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-black rounded-[12px]"
        size="lg"
      >
        Log in with Email
      </Button>
    </form>
  );
}
