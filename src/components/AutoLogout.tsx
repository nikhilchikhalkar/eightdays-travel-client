"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";


function getTokenExpiration(token: string): number | null {
  try {
    const base64Payload = token.split('.')[1];
    const payload = JSON.parse(atob(base64Payload));
    return payload?.exp ? payload.exp * 1000 : null; // Convert from seconds to ms
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
}

export default function AutoLogout() {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session?.apiToken) {
      console.warn("No apiToken found in session.");
      return;
    }

    const expiresAt = getTokenExpiration(session.apiToken);
    if (!expiresAt) {
      console.warn("No expiration found in token.");
      return;
    }

    const now = Date.now();
    const msLeft = expiresAt - now;

    if (msLeft <= 0) {
      console.log("Token already expired. Signing out...");
      signOut();
      return;
    }

    console.log(`Token expires in ${Math.floor(msLeft / 60000)} minute(s). Auto logout in ${msLeft} ms.`);

    const timer = setTimeout(() => {
      console.log("Token expired. Signing out...");
      signOut();
    }, msLeft);

    return () => clearTimeout(timer); // Clean up the timer
  }, [session?.apiToken]); // Only run effect if token changes

  return null;
}
