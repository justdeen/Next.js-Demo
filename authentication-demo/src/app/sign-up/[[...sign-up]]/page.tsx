import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";

export default function SignUpPage() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <div className="flex justify-center items-center py-8">
                <SignUp />
            </div>
        </Suspense>
    );
}