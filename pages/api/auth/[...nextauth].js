import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    /*
    CredentialsProvider({

        credentials: {
          email: { label: "Email", type: "email", placeholder: "jsmith" },
          password: {  label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          
          const {email, password} = credentials;
          const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
          const user = await res.json()
    
          if (res.ok && user) {
            console.log("connected");
            return user
          } else return null;
        }
      })*/
    // ...add more providers here
  ],

/*
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: '/login',
  },*/
}
export default NextAuth(authOptions)