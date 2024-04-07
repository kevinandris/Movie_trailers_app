"use client";
import { SessionProvider } from "next-auth/react";

/* TO ASSES the current user everywhere on the application */
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
