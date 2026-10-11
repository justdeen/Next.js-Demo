import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  // UserButton,
  SignedIn,
  SignedOut,
  Show,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import {Suspense} from "react";
import { redirect } from "next/navigation";

export const Navigation = () => {
  return (
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-[var(--foreground)]">
              Next.js App
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Suspense fallback={
                <div className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700">
                    Loading...
                </div>}>
                <Show when="signed-out">
                  {/* <SignInButton>
                    <button className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700">
                      Sign In
                    </button>
                  </SignInButton> */}
                <SignInButton mode="modal">
                  <button className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700">
                    Sign Up
                  </button>
                </SignUpButton>
                  {/* <SignUpButton>
                    <button className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700">
                      Sign Up
                    </button>
                  </SignUpButton> */}
                </Show>
            </Suspense>
            <Suspense fallback={
                <div className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700">
                    Loading...
                </div>}>
                    <Show when="signed-in">
                      <Link href="/user-profile">Profile</Link>
                      <SignOutButton/>
                      {/* <UserButton /> */}
                    </Show>
            </Suspense>
          </div>
        </div>
      </div>
    </nav>
  );
};