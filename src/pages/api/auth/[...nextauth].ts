import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "271358346932-t64rmr4boouo53t6s39i5gm8ma40to6h.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});
