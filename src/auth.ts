import db from "@/app/utils/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import authConfig from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
