import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import jwtDecode from "jwt-decode";
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    // 	clientId:process.env.NEXTAUTH_URL
    // }),
    // ...add more providers here
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as any;
        const res = await fetch("https://ecommerce.icedev.uz/token", {
          method: "POST",
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body:
            encodeURIComponent("username") +
            "=" +
            encodeURIComponent(username) +
            "&&" +
            encodeURIComponent("password") +
            "=" +
            encodeURIComponent(password),
        });
        const user = await res.json();
        if (res.ok && user) {
          return user;
        } else return null;
      },
    }),
  ],
  // secret: 'f97c215b445c6747df0099a6c7d56a18',

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user.decode = jwtDecode(token.access_token || " ");
      session.user.token = token;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
export default NextAuth(authOptions);
