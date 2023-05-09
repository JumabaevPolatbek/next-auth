import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
declare module "next-auth" {
  interface Session {
    user: {
      token: {
        access_token?: string | undefined | null;
      };
      decode: {
        sub?: string | undefined | null;
        is_admin?: number | undefined | null;
        exp?: number | undefined | null;
      };
    };
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    access_token?: string | undefined | null;
  }
}
