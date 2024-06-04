import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dotenv from "dotenv";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // ... other NextAuth.js options (e.g., secret, callbacks)
  debug: true,
};

const handler = NextAuth(authOptions);
export default handler;
export { handler as GET, handler as POST };

dotenv.config();
