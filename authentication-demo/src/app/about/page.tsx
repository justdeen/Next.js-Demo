import { auth, } from "@clerk/nextjs/server";
import { redirect } from "next/navigation"

export default async function About() {
    const { userId, } = await auth();
    if (!userId) redirect("/");
    
    return <h1>About page</h1>
}