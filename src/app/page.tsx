import { LoginButton } from "@/components/auth/login-button";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Logo />

      <div className="flex flex-col items-center justify-center space-y-4">
        <h2>Please log in</h2>

        <LoginButton>
          <Button>Log in</Button>
        </LoginButton>
      </div>
    </main>
  );
}
