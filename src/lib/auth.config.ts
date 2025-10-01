
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      username?: string;
    };
    apiToken?: string;
  }

  interface User {
    id: string; // ✅ Required by NextAuth
    username: string;
    email: string;
    token: string;
    name?: string;
  }

  interface JWT {
    apiToken?: string;
    username?: string;
    email?: string;
  }
}

interface LoginResponse {
  status: boolean;
  message: string;
  token: string;
  user: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    id?: string; 
  };
  code: number;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: { label: "Username or Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"identifier" | "password", string> | undefined
      ) {
        if (!credentials) return null;

        const { identifier, password } = credentials;

        const res = await fetch(`${process.env.NEXT_BASE_URL}/api/auth/signin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ identifier, password }),
        });

        if (!res.ok) {
          console.error("Login failed:", res.statusText);
          return null;
        }

        const data: LoginResponse = await res.json();

        if (data?.status && data.token && data.user) {
          return {
            id: data.user.id ?? data.user.username, 
            username: data.user.username,
            email: data.user.email,
            name: `${data.user.firstName} ${data.user.lastName}`,
            token: data.token,
          };
        }

        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.apiToken = user.token;
        token.username = user.username;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        ...session.user,
        username: token.username as string,
        email: token.email as string,
      };
      session.apiToken = token.apiToken as string;
      return session;
    },

    async redirect({ url, baseUrl }) {
      if (url === "/api/auth/signout" || url === baseUrl) {
        return `${baseUrl}/signin`;
      }
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },

  pages: {
    signIn: "/signin",
    signOut: "/signin",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
