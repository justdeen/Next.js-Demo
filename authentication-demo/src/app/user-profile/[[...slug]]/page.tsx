import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import ProfileWidget from "./profile-widget";

async function ProfileContent() {
    // const { userId } = await auth();

    // if (!userId) {
    //     redirect("/");
    // }

    return <ProfileWidget />;
}

export default function UserProfilePage() {
    return (
        <div className="flex justify-center items-center py-8">
            <Suspense
                fallback={
                    <div className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700">
                        Loading...
                    </div>
                }
            >
                <ProfileContent />
            </Suspense>
        </div>
    );
}