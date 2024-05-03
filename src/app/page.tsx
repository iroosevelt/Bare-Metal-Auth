import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./utils/auth";
import LogoutButton from "./auth/_components/LogoutButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import Logo from "@/components/logo";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Logo />
      {session ? (
        <div>
          <h2>You are logged in</h2>
          <LogoutButton />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2>Please log in</h2>
          <Button asChild>
            <Link href="/auth">Log in</Link>
          </Button>
        </div>
      )}
    </main>
  );
}
