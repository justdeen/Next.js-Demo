import { auth, currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";

async function DashboardContent() {
    const authObj = await auth()
    const userObj = await currentUser()
    console.log(authObj, userObj)
    return <h1>Dashboard</h1>
}

export default function DashboardPage() {
    return (
        <Suspense fallback={<p>Loading dashboard...</p>}>
            <DashboardContent />
        </Suspense>
    );
}
