import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

async function AboutContent() {
    const { userId } = await auth();
    if (!userId) redirect("/");

    return <h1>About page</h1>;
}

export default function About() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <AboutContent />
        </Suspense>
    );
}