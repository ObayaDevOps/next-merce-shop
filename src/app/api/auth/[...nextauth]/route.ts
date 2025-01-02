import NextAuth from "next-auth"
import { authOptions } from "@/util/auth"

// https://medium.com/@rody.gosset/setting-up-nextauth-js-in-a-next-js-14-app-router-project-ec3252dc2780

const handler = NextAuth(authOptions)


export { handler as GET, handler as POST }