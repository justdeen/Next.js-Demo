import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";

export default function SignInPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="flex justify-center items-center py-8">
        <SignIn />
      </div>
    </Suspense>
  );
}