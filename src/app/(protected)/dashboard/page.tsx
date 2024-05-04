import { auth, signOut } from "@/auth";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const session = await auth();
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="flex items-center justify-between p-8">
        <Logo />
        <form
          action={async () => {
            "use server";

            await signOut();
          }}
        >
          <Button type="submit">Sign out</Button>
        </form>
      </nav>
      <div className="flex flex-col items-center p-24">
        <div>{JSON.stringify(session)}</div>
      </div>
    </div>
  );
}
